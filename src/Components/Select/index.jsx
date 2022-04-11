import RcSelect from "react-select";

function Select({
  children,
  className,
  placeholder = "",
  width,
  height = "32px",
  isClearable = false,
  isSearchable = false,
  isMulti = false,
  disabled = false,
  isLoading = false,
  options = [],
  borderRight,
  borderLeft,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  defaultValue,
  style,
  error,
  onChange,
  onInputChange,
  ...rest
}) {
  const customStyles = {
    control: (styles) => {
      return {
        ...styles,

        width: width,

        minHeight: height,
        borderRadius: "0.5rem",

        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        border: error ? "1px solid rgb(220, 38, 37)" : "1px solid rgba(229, 231, 235)",
        ":hover": {
          border: error ? "1px solid rgb(220, 38, 37, 0.5)" : "1px solid rgba(64, 148, 247, 1)",
        },
        borderRight: borderRight,
        boderLeft: borderLeft,

        ":focus-within": {
          border: "2px solid rgba(64, 148, 247, 0.5)",
          boxShadow:
            "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        },
      };
    },
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0 14px",
      fontSize: "14px",
      lineHeight: '24px'
    }),
    input: (provided, state) => ({
      ...provided,

      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: height,
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#999",
      };
    },
    option: (styles) => {
      return {
        ...styles,
      };
    },
  };

  return (
    <div
      style={style}
      className={`${className} text-body focus-within:z-40 border-0`}
    >
      <RcSelect
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={defaultValue}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        styles={customStyles}
        onChange={onChange}
        onInputChange={onInputChange}
        {...rest}
      />
    </div>
  );
}

export default Select;
