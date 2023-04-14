type Card2Props = {
  Gameweek: string;
  Prize: string;
  GamePoints: string;
  GameEntries: string;
  DaysRemaining: string;
};

const Card2 = ({
  Gameweek,
  Prize,
  GamePoints,
  GameEntries,
  DaysRemaining,
}: Card2Props) => {
  return (
    <div className="card2">
      <div className="card2__header">
        <img
          className="card2__img"
          src="https://i.pinimg.com/originals/fb/9a/ac/fb9aac3070bb71a9b1c0d646eac20e53.png"
          alt="slika"
        />
        <div>
          <h4>{Gameweek}</h4>
          <p>Premier League</p>
        </div>
      </div>
      <div className="card2__desc">
        <div>
          <div>Winning prize</div>
          <div>
            <b>{Prize}</b>
          </div>
        </div>
        <div>
          <img
            src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
            alt="blue"
            className="card2__banner__logo"
          />
          <p className="card2__banner__text">{DaysRemaining}</p>
        </div>
      </div>
      <hr />
      <div className="card2__footer">
        <div>
          <p>Game points</p>
          <div>
            <b>{GamePoints}</b>
          </div>
        </div>
        <div>
          <p>Game entries</p>
          <div>
            <b>{GameEntries}</b>
          </div>
        </div>
        <div>
          <p>Reminder</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card2;
