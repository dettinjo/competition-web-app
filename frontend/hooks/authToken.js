import { useApolloClient } from "@apollo/client";
import { AuthContext } from "../Context/auth-context";
import { useContext } from "react";

const TOKEN_NAME = "token";
// custom hook to handle authToken - we use compositon to decouple the auth system and it's storage
export const useAuthToken = () => {
  // this function allows to save any string in our cookies, under the key "authToken"
  async function setAuthToken(authToken) {
    if (process.browser) {
      window.localStorage.setItem(TOKEN_NAME, authToken);
    }
  }

  //this function removes the key "authToken" from our cookies. Useful to logout
  const removeAuthToken = () => {
    if (process.browser) {
      window.localStorage.removeItem(TOKEN_NAME);
    }
  };

  let authToken = undefined;

  if (process.browser) {
    authToken = window.localStorage.getItem(TOKEN_NAME);
  }

  return [authToken, setAuthToken, removeAuthToken];
};

export const useLogout = () => {
  const [_, __, removeAuthToken] = useAuthToken();
  const client = useApolloClient();

  const logout = async () => {
    removeAuthToken();
    await client.clearStore(); // we remove all information in the store
  };
  return logout;
};
