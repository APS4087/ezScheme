import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("sys-user")) || null);

  // Function to update the user's information
  const updateAuthUser = (updatedUserData) => {
    setAuthUser({ ...authUser, ...updatedUserData });
    // Update localStorage as well if needed
    localStorage.setItem("sys-user", JSON.stringify({ ...authUser, ...updatedUserData }));
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, updateAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
