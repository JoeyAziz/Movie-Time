import React, { useState } from "react";
import Modal, { ModalProps } from "../Modal";
import Input from "../Input";
import { isValidPassword, isValidUsername } from "../../utils";
import { useKeypress } from "../../hooks/useKeypress";

export type UserControlledFormValues = { username: string; password: string };

interface UserControlledFormProps {
  onSubmit: (values: UserControlledFormValues) => void;
  modalProps: Partial<ModalProps>;
}

const UserControlledModalForm: React.FC<UserControlledFormProps> = ({ onSubmit, modalProps }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Partial<UserControlledFormValues>>({});

  useKeypress("Enter", true, () => handleSubmit());

  const handleSubmit = () => {
    const newErrors: Partial<{ username: string; password: string }> = {};
    if (!isValidUsername(username)) {
      newErrors.username = "No special characters are allowed.";
    }
    if (!isValidPassword(password)) {
      newErrors.password = "Password should be at least 4 characters.";
    }
    if (!newErrors.username && !newErrors.password) {
      onSubmit({ username, password });
    } else setErrors(newErrors);
  };

  return (
    <Modal onOk={handleSubmit} {...modalProps}>
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
  );
};

export default UserControlledModalForm;
