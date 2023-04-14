import { useState } from "react";

const Form = () => {
  const [validation, setValidation] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    if (!value) {
      setValidation(true);
    }
  };

  return (
    <form>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <label htmlFor="name" className="form__label">
          Ime
        </label>
        {validation ? <div>This field can not be left blank.</div> : ""}

        <button className="button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
