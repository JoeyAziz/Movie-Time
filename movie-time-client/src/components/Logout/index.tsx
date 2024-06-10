import React from "react";
import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";

const Logout: React.FC = () => {
  const { logout } = useAuth();
  return <Button onClick={logout}>LOGOUT</Button>;
};

export default Logout;
