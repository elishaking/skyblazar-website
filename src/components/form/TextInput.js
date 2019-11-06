import React from 'react';
import './Input.scss';

export default function TextInput({ type, name, placeholder, onChange, error, marginBottom = '2em' }) {
  return (
    <div className="text-input" style={{
      marginBottom: marginBottom
    }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />

      {error && (<p><small>{error}</small></p>)}
    </div>
  )
}
