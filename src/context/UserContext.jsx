import { createContext, useReducer } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  // initial state
  const USERS = [];

  // reducer function
  const userReducer = (state, action) => {
    console.log(action, "action");
    switch (action.type) {
      case "ADD_USER":
        return [...state, action.payload];
      case "DELETE_USER":
        return state.filter((user) => user.id !== action.payload);
      case "UPDATE_USER":
        return state.map((user) =>
          user.id === action.payload.id
            ? (user = action.payload.updatedUser)
            : user
        );
      default:
        return state;
    }
  };

  // useReducer hook
  const [state, dispatch] = useReducer(userReducer, USERS);

  return (
    <UserContext.Provider value={{ data: state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
