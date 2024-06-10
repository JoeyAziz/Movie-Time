import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useToggle } from "../../hooks/useToggle";
import Button from "../Button";
import UserControlledModalForm, { UserControlledFormValues } from "../UserControlledModalForm";

const Login: React.FC = () => {
  const [open, toggle] = useToggle();
  const { login } = useAuth();

  const handleSubmit = ({ username, password }: UserControlledFormValues) => {
    login(username, password, () => toggle(false));
  };

  return (
    <>
      <Button onClick={() => toggle()}>LOGIN</Button>
      <UserControlledModalForm
        onSubmit={handleSubmit}
        modalProps={{
          title: "Nice to you see back!",
          open,
          okText: "Log in",
          onCancel: () => toggle(false),
        }}
      />
    </>
  );
};

export default Login;
