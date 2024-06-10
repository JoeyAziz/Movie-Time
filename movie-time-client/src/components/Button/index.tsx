import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      type="button"
      className={`${className} cursor-pointer flex justify-center rounded-md px-3 py-1.5 active:opacity-[0.85] active:scale-90 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600`}
      {...props}
    />
  );
};

export default Button;
