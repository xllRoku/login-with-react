import { useState } from "react";
import { AuthContext } from "./AuthContext";

type ChildrenProp = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: ChildrenProp) => {
  const [auth, setAuth] = useState("");

  localStorage.setItem("token", auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
