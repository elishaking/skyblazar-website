import React from "react";
import "./Button.scss";

interface ButtonProps {
  link: string;
  text: string;
}

export default function Button({ link, text }: ButtonProps) {
  return (
    <a className="button" href={link}>
      {text}
    </a>
  );
}
