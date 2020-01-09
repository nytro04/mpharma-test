import React from "react";
import classnames from "classnames";

const TextInput = ({
  name,
  label,
  type,
  error,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classnames("form-control", { "is-invalid": error })}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
