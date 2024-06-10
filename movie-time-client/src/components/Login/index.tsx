import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input";
import { useAuth } from "../../context/AuthContext";
import { isValidPassword, isValidUsername } from "../../utils";

const Login: React.FC = () => {
  const [open, toggle] = useToggle();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Partial<{ username: string; password: string }>>({});
  const { login } = useAuth();

  const handleSubmit = () => {
    const newErrors: Partial<{ username: string; password: string }> = {};
    if (!isValidUsername(username)) {
      newErrors.username = "No special characters are allowed.";
    }
    if (!isValidPassword(password)) {
      newErrors.password = "Password should be at least 4 characters.";
    }
    if (!newErrors.username && !newErrors.password) {
      login(username, password, () => toggle(false));
    } else setErrors(newErrors);
  };

  return (
    <>
      <Button onClick={() => toggle()}>LOGIN</Button>
      <Modal
        title="Nice to you see back!"
        open={open}
        okText="Log in"
        onCancel={() => toggle(false)}
        onOk={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <Input
            placeholder="username"
            onInput={(e) => {
              setUsername(e.currentTarget.value);
            }}
          />
          {errors?.username && <span className="text-sm text-red-400">{errors?.username}</span>}
          <Input
            type="password"
            placeholder="password"
            onInput={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          {errors?.password && <span className="text-sm text-red-400">{errors?.password}</span>}
        </div>
      </Modal>
    </>
  );
};

export default Login;
