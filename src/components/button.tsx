import { ReactNode } from "react";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  big?: boolean;
};

const Button = () => {
  return <button className="button">Click me!</button>;
};

export default Button;
