const FlexExe = () => {
  return (
    <>
      <div className="flexexe__wrapper">
        <div>
          <div className="flexexe__wrapper1">
            <div className="flexexe1">
              <div>
                <img
                  src="https://source.unsplash.com/random/?hamburger"
                  alt="logo"
                  width={30}
                  height={30}
                />
                <span>Slika 'Amburgera</span>
              </div>
              <div>
                <img
                  src="https://image.shutterstock.com/image-vector/thick-hamburger-menu-bar-line-260nw-274138187.jpg"
                  alt="hamburgerlogo2"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="flexexe__wrapper2">
          <div className="flexexe2">
            <div>
              <span>Slika 'Amburgera</span>
              <img
                src="https://source.unsplash.com/random/?hamburger"
                alt="hamburgerlogo"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="flexexe__wrapper3">
          <div className="flexexe3">
            <div>
              <img
                src="https://source.unsplash.com/random/?hamburger"
                alt="hamburgerlogo"
                width={30}
                height={30}
              />
              <span>Slika 'Amburgera</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlexExe;
