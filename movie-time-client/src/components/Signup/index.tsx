import React from "react";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";

const Signup: React.FC = () => {
  const [open, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>SIGNUP</Button>
      <Modal title="Welcome to Move.Time!" open={open} okText="Sign up" onCancel={() => toggle(false)}>
        <div className="flex flex-col gap-4">
          <Input placeholder="@username" />
          <Input type="password" placeholder="password" />
        </div>
      </Modal>
    </>
  );
};

export default Signup;
