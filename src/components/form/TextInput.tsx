import React from "react";
import "./Input.scss";

interface TextInputProps {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  marginBottom?: string;
}

export default function TextInput({
  type,
  name,
  placeholder,
  onChange,
  error,
  marginBottom = "2em"
}: TextInputProps) {
  return (
    <div
      className="text-input"
      style={{
        marginBottom: marginBottom
      }}
    >
      <input
        className={error ? "error" : ""}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && (
        <p>
          <small>{error}</small>
        </p>
      )}
    </div>
  );
}
