import "../styles/globals.css";
import Layout from "../Components/Layout";
import { useApollo } from "../lib/apolloClient";
import { onError } from "@apollo/client/link/error";
import React, { useState, useMemo } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { AuthManager } from "../Context/auth-context";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  /*   const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:8000/graphql" }),
  ]);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
 */
  return (
    <ApolloProvider client={apolloClient}>
      <AuthManager>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthManager>
    </ApolloProvider>
  );
}

export default MyApp;
