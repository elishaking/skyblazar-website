import React from "react";
import "./Input.scss";

interface TextInputProps {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  value?: string;
  marginBottom?: string;
}

export default function TextInput({
  type,
  name,
  placeholder,
  onChange,
  error,
  value,
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
        value={value}
      />

      {error && (
        <p>
          <small>{error}</small>
        </p>
      )}
    </div>
  );
}
