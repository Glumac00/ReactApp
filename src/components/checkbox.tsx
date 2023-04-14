const Checkbox = () => {
  return (
    <label className="checkbox-btn">
      <label htmlFor="checkbox"></label>
      <input id="checkbox" type="checkbox"></input>
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
