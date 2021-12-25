import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

//import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from "./schema.json";

let apolloClient = null;

/* const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
}); */

const httpLink = new HttpLink({
  uri: "https://competition-web-app.herokuapp.com/graphql",
});

const authMiddleware = () =>
  new ApolloLink((operation, forward) => {
    let authToken = undefined;

    if (process.browser) {
      authToken = window.localStorage.getItem("token");
    }
    // add the authorization to the header
    if (authToken) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

function createApolloClient(initialState) {
  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authMiddleware().concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // hydration of the initial state
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
