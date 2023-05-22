import { useEffect } from "react";

const Vjezba0305 = () => {
  //zadatci
  //1. dohvatimo box i promjenimo mu background-color (kroz js)
  //2. dodamo dodatnu klasu na box koja ce povecati njegove dimenzije
  //3. animiramo box do 30px i nazad (kroz js)
  //4. animirati box dijagonalno do (30px,30px) i nazad do 50px
  //5. kreiramo funckiju koja ce imati lokalnu varijablu u kojoj cemo izracunati sumu dva parametra i rezultat ispisati unutar boxa
  //6. dodaj onClick event i na klik smanji dimenzije boxa

  let position = 0;
  let reverse = false;
  useEffect(() => {
    //1. dohvatimo box i promjenimo mu background-color (kroz js)
    let box1 = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box1.style.backgroundColor = "red";

    //2. dodamo dodatnu klasu na box koja ce povecati njegove dimenzije
    let box2 = document.getElementsByClassName("box")[1] as HTMLDivElement;
    box2.classList.add("boxTest");
    //3. animiramo box do 30px i nazad (kroz js)
    let box3 = document.getElementsByClassName("box")[2] as HTMLDivElement;
    box3.classList.remove("boxTest");
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }

      var currentPosition = position + "px";
      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box3.style.marginLeft = currentPosition;
    };
    setInterval(frame, 30);

    //4. animirati box dijagonalno do (30px,30px) i nazad do 50px
    var box4 = document.getElementsByClassName("box")[3] as HTMLDivElement;

    const frameDiag = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }

      let currentPosition = position + "px";
      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box4.style.marginLeft = currentPosition;
      box4.style.marginTop = currentPosition;
    };
    setInterval(frameDiag, 30);
  }, []);

  //5.kreiramo funckiju koja ce imati lokalnu varijablu u kojoj cemo izracunati sumu dva parametra i rezultat ispisati unutar boxa
  var box5 = document.getElementsByClassName("box")[4] as HTMLDivElement;
  const sum = (a: any, b: any) => {
    return a + b;
  };
  //6. dodaj onClick event i na klik smanji dimenzije boxa
  let BoxTest = document.getElementsByClassName("box")[5] as HTMLDivElement;
  const handleClick = () => {
    BoxTest.classList.add("boxTest2");
  };
  return (
    <div className="container">
      <h1>Vjezba 3.5.</h1>
      <hr />
      <div className="box">Red box</div>
      <div className="box">Big box</div>
      <div className="box">moving box</div>
      <br />
      <div className="box">diagonal moving box</div>
      <br />
      <div className="box">{sum(5, 18)}</div>
      <div className="box" onClick={() => handleClick()}>
        box smaller on click
      </div>
    </div>
  );
};

export default Vjezba0305;
