import { LOGIN_QUERY } from "../GraphQl/user";
import { useLazyQuery  } from "@apollo/client";
import { useAuthToken } from "./authToken";
import React from "react";

export default function useLoginQuery({username, password}) {
  const [_, setAuthToken, __] = useAuthToken();
  const [queryLogin, { loading, error, data }] = useLazyQuery (LOGIN_QUERY, {
    //if the mutation succeed, we save the token for later
    onCompleted: (data) => {
      setAuthToken(data.login);
    },
  });

  function login ({ username, password }) {
    return queryLogin({
      variables: {
        username,
        password,
      },
    });
  };
  return [login, mutationResults];
}
