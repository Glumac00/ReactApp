import { ListOfPlayers, PlayersType } from "../data/Listofplayers";
import ClubInfo from "../components/ClubInfo";

import { useState } from "react";
const Vjezba2405 = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activePlayer, setActivePlayer] = useState<PlayersType | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const findPlayer = (number: number) => {
    ListOfPlayers.forEach((player) => {
      if (number === player.shirtNumber) {
        setActivePlayer(player);
      }
    });
  };
  const addToFavorites = (item: string) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };
  return (
    <span className="Vjezba2405__container">
      <header className="Vjezba2405__header">
        <h1>MAN UTD</h1>
      </header>
      <div className="Vjezba2405__body">
        <ClubInfo />
      </div>
      <div className="Vjezba2405__body">
        <h2>
          List of all promenant 1st squad active players of the 22/23 season
        </h2>

        <div>
          {ListOfPlayers.map((link) => {
            return (
              <button
                className="button"
                onClick={() => {
                  findPlayer(link.shirtNumber);
                  setActiveModal(true);
                  addToFavorites(link.name);
                }}
              >
                {link.name}
              </button>
            );
          })}
          <div>
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
                      <div className="card">
                        <img
                          src={activePlayer.picture}
                          alt=""
                          className="card__img"
                          height={50}
                          width={50}
                        />
                        <hr />
                        <div className="card__title">{activePlayer.name}</div>
                        <div className="card__desc">
                          {activePlayer.shirtNumber}
                        </div>
                        <div className="card__desc">
                          {activePlayer.position}
                        </div>
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
          </div>
        </div>
      </div>
      <div className="Vjezba2405__body">
        <h2>
          Favorites:
          {favorites.map((favorites, player) => (
            <div key={player}>{favorites}</div>
          ))}
        </h2>
      </div>
    </span>
  );
};

export default Vjezba2405;
