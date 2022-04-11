import React from "react";

const FormInput = ({
  type,
  name,
  startLabel,
  endLabel,
  required = false,
  handleChange,
  placeholder,
  errorMessage,
  inputClass,
  divClass,
  key,
  handleClick,
  ...props
}) => {
  return (
    <div className={`${divClass}`} key={key}>
      {startLabel && <label htmlFor={name}>{startLabel}</label>}
      <input
        className={`form-input ${inputClass}`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onClick={handleClick}
        // onChange={() => handleChange()}
        onChange={handleChange}
        {...props}
      />
      {endLabel && <label htmlFor={name}>{endLabel}</label>}
      {required && errorMessage && (
        <div className="errorMessage">{errorMessage}</div>
      )}
    </div>
  );
};

export default FormInput;
