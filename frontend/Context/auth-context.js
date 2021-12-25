import { createContext, useReducer } from "react";

const initialState = {
  token: null,
  userId: null,
  userRole: null,
  email: null,
};

const userContext = createContext(initialState);
const { Provider } = userContext;

const AuthManager = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { userContext, AuthManager };
