import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useToggle } from "../../hooks/useToggle";
import Button from "../Button";
import UserControlledModalForm, { UserControlledFormValues } from "../UserControlledModalForm";

const Signup: React.FC = () => {
  const [open, toggle] = useToggle();
  const { singup } = useAuth();

  const handleSubmit = ({ username, password }: UserControlledFormValues) => {
    singup(username, password, () => toggle(false));
  };

  return (
    <>
      <Button onClick={() => toggle()}>SIGNUP</Button>
      <UserControlledModalForm
        onSubmit={handleSubmit}
        modalProps={{
          title: "Welcome to Move.Time!",
          open,
          okText: "Sign up",
          onCancel: () => toggle(false),
        }}
      />
    </>
  );
};

export default Signup;
