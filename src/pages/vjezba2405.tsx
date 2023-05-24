import logo from "./../assets/Logo.png";
import { ListOfPlayers, PlayersType } from "../data/Listofplayers";
import ClubInfo from "../components/ClubInfo";

import { useState } from "react";
const Vjezba2405 = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activePlayer, setActivePlayer] = useState<PlayersType | null>(null);
  const findPlayer = (number: number) => {
    ListOfPlayers.forEach((player) => {
      if (number === player.shirtNumber) {
        setActivePlayer(player);
      }
    });
  };
  return (
    <span>
      <header className="Vjezba2405__header">
        <img
          className="Vjezba2405__header__logo"
          src={logo}
          alt="Logo"
          height={200}
          width={200}
        />
      </header>
      <body className="Vjezba2405__body">
        <ClubInfo />
        <hr />
        <h2>
          List of all promenant 1st squad active players of the 22/23 season
        </h2>
        <hr />
        {ListOfPlayers.map((link) => {
          return (
            <div
              onClick={() => {
                findPlayer(link.shirtNumber);
                setActiveModal(true);
              }}
            >
              {link.name}
            </div>
          );
        })}
        {activeModal ? (
          <div className={`modal ${activeModal ? "isactive" : ""}`}>
            <div>
              <a
                title="Close"
                className="close"
                onClick={() => {
                  setActiveModal(false);
                }}
              >
                X
              </a>
              <div>
                {activePlayer ? (
                  <div>
                    <img
                      src={activePlayer.picture}
                      alt=""
                      height={100}
                      width={100}
                      className="Vjezba2405__img"
                    />
                    <div>Name:{activePlayer.name}</div>
                    <div>Shirt Number: {activePlayer.shirtNumber}</div>
                    <div>Position: {activePlayer.position}</div>
                  </div>
                ) : (
                  <div>Niti jedan Player nije odabran.</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </body>
    </span>
  );
};

export default Vjezba2405;
