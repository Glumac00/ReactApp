import Kruh from "./../assets/kruh.png";
import Burek from "./../assets/burek.png";
import Slano from "./../assets/slano.png";
import Slatko from "./../assets/slatko.png";
import Pecivo from "./../assets/pecivo.png";
import Pizza from "./../assets/pizza.png";
import Sendvic from "./../assets/sendvic.png";
import Salata from "./../assets/salata.png";
import Horeca from "./../assets/horeca.png";
import Pakirano from "./../assets/pakirano.png";
import Kolaci from "./../assets/kolaci.png";
import Torte from "./../assets/torte.png";
import PrigodneTorte from "./../assets/prigodnetorte.png";
import GooglePlay from "./../assets/GooglePlay.png";
import AppStore from "./../assets/AppStore.png";

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
        <span className="Mlinar__tag">HoReCa</span>
        <span className="Mlinar__tag">Pakirano</span>
        <span className="Mlinar__tag">Kolači</span>
        <span className="Mlinar__tag">Torte</span>
        <span className="Mlinar__tag">Prigodne Torte</span>
      </div>
      <div className="Mlinar__grid">
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img src={Kruh} alt="kruh" className="Mlinar__grid__item__img" />
            <button className="btn">→</button>
          </div>
          <figcaption className="Mlinar__grid__item__title">
            <b>Kruh</b>
          </figcaption>
          <figcaption>Kruhovi ravno iz peći</figcaption>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Pecivo}
              alt="pecivo"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
          </div>
          <figcaption className="Mlinar__grid__item__title">
            <b>Peciva</b>
          </figcaption>
          <figcaption>Tradicionalna, ukusna i jednostavna</figcaption>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img src={Slano} alt="slano" className="Mlinar__grid__item__img" />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Slano</b>
            </figcaption>
            <figcaption>Neodoljivi slani zalogaji</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Slatko}
              alt="Slatko"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Slatko</b>
            </figcaption>
            <figcaption>Najslađe od finih peciva</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img src={Burek} alt="burek" className="Mlinar__grid__item__img" />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Burek</b>
            </figcaption>
            <figcaption>Sočni okusi tradicije</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img src={Pizza} alt="pizza" className="Mlinar__grid__item__img" />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Pizza</b>
            </figcaption>
            <figcaption>Svježe, bogate i slasne</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Sendvic}
              alt="sendvic"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Sendviči</b>
            </figcaption>
            <figcaption>Bogati i neodoljivi</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Salata}
              alt="salata"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Salata</b>
            </figcaption>
            <figcaption>Zdrav obrok u žurbi</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Horeca}
              alt="HoReCa"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>HoReCa</b>
            </figcaption>
            <figcaption>Prednost vašeg poslovanja</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Pakirano}
              alt="pakirano"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Pakirano</b>
            </figcaption>
            <figcaption>Dugotrajni i puni okusa</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={Kolaci}
              alt="kolaci"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Kolači</b>
            </figcaption>
            <figcaption>Bogati okusom</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img src={Torte} alt="torte" className="Mlinar__grid__item__img" />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Torte</b>
            </figcaption>
            <figcaption>Kraljevski ukusne slastice</figcaption>
          </div>
        </div>
        <div className="Mlinar__grid__item">
          <div className="Mlinar__grid__item__container">
            <img
              src={PrigodneTorte}
              alt="prigodnetorte"
              className="Mlinar__grid__item__img"
            />
            <button className="btn">→</button>
            <figcaption className="Mlinar__grid__item__title">
              <b>Prigodne torte</b>
            </figcaption>
            <figcaption>Torte za sve prigode</figcaption>
          </div>
        </div>
      </div>
      <hr />
      <div className="Mlinar__footer">
        <div className="Mlinar__footer__left">
          <span>MLINAR</span>
          <div>MLINAR pekarska industrija d.o.o.</div>
          <div>Radnička cesta 228c</div>
          <div>10000 Zagreb, Hrvatska</div>
        </div>
        <div className="Mlinar__footer__middle">
          <div>KONTAKT</div>
          <div>T: +385 1 23 82 300 </div>
          <div>F: +385 1 23 82 303</div>
          <div>Email: info@mlinar.eu.com</div>
        </div>
        <div className="Mlinar__footer__right">
          <div>
            <span className="Mlinar__footer__right__text">Proizvodi</span>
            <span className="Mlinar__footer__right__text">Lokacije</span>
            <span className="Mlinar__footer__right__text">Karijere</span>
            <span className="Mlinar__footer__right__text">Naša priča</span>
            <span className="Mlinar__footer__right__text">Kontakt</span>
          </div>
          <div className="Mlinar__footer__right__icons">
            <span>
              <img src={GooglePlay} alt="GooglePlay" />
            </span>
            <span>
              <img src={AppStore} alt="AppStore" />
            </span>
          </div>
          <div>
            <span>© MLINAR pekarska industrija d.o.o. | Made by: Reroot</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Mlinar;
