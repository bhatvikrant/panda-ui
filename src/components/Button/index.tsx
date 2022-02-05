import React from "react";
import "./index.css";

// TS INTERFACES
export interface Props {
  label: string;
}

const Button: React.FC<Props> = (props) => {
  const { label } = props;

  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default Button;
