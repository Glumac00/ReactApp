type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <div>
      {label ? <label htmlFor={label}>{label}</label> : ""}
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className={`input ${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      <div className="input__validation">
        {validation ? <p>{validation}</p> : ""}
      </div>
    </div>
  );
};

export default Input;
