import React from "react";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";

const Login: React.FC = () => {
  const [open, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>LOGIN</Button>
      <Modal title="Nice to you see back!" open={open} okText="Log In" onCancel={() => toggle(false)}>
        <div className="flex flex-col gap-4">
          <Input placeholder="@username" />
          <Input type="password" placeholder="password" />
        </div>
      </Modal>
    </>
  );
};

export default Login;
