import Kruh from "./../assets/kruh.png";
import Burek from "./../assets/burek.png";
import Kifla from "./../assets/kifla.png";
import Kolac from "./../assets/kolac.png";
import Pecivo from "./../assets/pecivo.png";
import Pizza from "./../assets/pizza.png";

const Mlinar = () => {
  return (
    <div className="Mlinar__wrapper">
      <div className="Mlinar__header">
        <p className="Mlinar__header__text">
          <span style={{ color: "Orange" }}>Najukusniji</span>
          pekarski proizvodi u susjedstvu.
        </p>
      </div>
      <div className="Mlinar__tags">
        <span className="Mlinar__tag">Kruh</span>
        <span className="Mlinar__tag">Peciva</span>
        <span className="Mlinar__tag">Slano</span>
        <span className="Mlinar__tag">Slatko</span>
        <span className="Mlinar__tag">Burek</span>
        <span className="Mlinar__tag">Pizza</span>
        <span className="Mlinar__tag">Sendviči</span>
        <span className="Mlinar__tag">Salata</span>
        <span className="Mlinar__tag">Pakirano</span>
        <span className="Mlinar__tag">Kolači</span>
        <span className="Mlinar__tag">Torte</span>
      </div>
      <div className="Mlinar__grid">
        <div className="Mlinar__grid__item">
          <img src={Kruh} alt="kruh" />
          <figcaption>
            <b>Kruh</b>
          </figcaption>
          <figcaption>Kruhovi ravno iz peći</figcaption>
        </div>
        <div className="Mlinar__grid__item">
          <img src={Burek} alt="burek" />
          <figcaption>
            <b>Burek</b>
          </figcaption>
          <figcaption>Sočni okusi tradicije</figcaption>
        </div>
        <div className="Mlinar__grid__item">
          <img src={Kifla} alt="kifla" />
          <figcaption>
            <b>Slano</b>
          </figcaption>
          <figcaption>Neodoljivi slani zalogaji</figcaption>
        </div>
        <div className="Mlinar__grid__item">
          <img src={Kolac} alt="kolac" />
        </div>
        <div className="Mlinar__grid__item">
          <img src={Pecivo} alt="pecivo" />
        </div>
        <div className="Mlinar__grid__item">
          <img src={Pizza} alt="pizza" />
        </div>
      </div>
    </div>
  );
};

export default Mlinar;
