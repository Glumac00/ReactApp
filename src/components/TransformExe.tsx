const TransformExe = () => {
  return (
    <>
      <div className="box__wrapper">
        <div>
          <h4>translate</h4>
          <div className="box box--translate"></div>
        </div>
        <div>
          <h4>rotate</h4>
          <div className="box box--rotate"></div>
        </div>
        <div>
          <h4>scale</h4>
          <div className="box box--scale"></div>
        </div>
        <div>
          <h4>skew</h4>
          <div className="box box--skew"></div>
        </div>
      </div>
    </>
  );
};

export default TransformExe;
