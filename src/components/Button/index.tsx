import React from "react";

// TS INTERFACES
interface Props {
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
