import React from "react";
import "./index.css";

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

// TS INTERFACES
export interface Props {
  src?: string;
  alt?: string;
  text?: string;
  size?: SizeType;
  bordered?: boolean;
  color?: ColorType;
  squared?: boolean;
}

const Avatar: React.FC<Props> = (props) => {
  const {
    src,
    text,
    size = "sm",
    alt = "",
    bordered,
    color = "primary",
    squared,
  } = props;

  let parentClasses = "";
  let imgClasses = "";

  if (bordered) {
    parentClasses += ` avatar--bordered--${color}`;
  }
  if (!bordered) {
    parentClasses += ` avatar--bg--${color}`;
  }
  if (squared) {
    parentClasses += " avatar--squared";
    imgClasses += " avatar--squared";
  }

  if (src) {
    return (
      <div className={`avatar__parent avatar--${size} ${parentClasses}`}>
        <img
          src={src}
          alt={alt}
          className={`avatar__img avatar--${size} ${imgClasses}`}
        />
      </div>
    );
  }

  if (text) {
    return (
      <div className={`avatar__parent avatar--${size} ${parentClasses}`}>
        <div>{text.trim().slice(0, 2).toUpperCase()}</div>
      </div>
    );
  }

  return (
    <div className={`avatar__parent avatar--${size} ${parentClasses}`}>
      <div>AB</div>
    </div>
  );
};

export default Avatar;
