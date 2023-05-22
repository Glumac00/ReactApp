type CardProps = {
  Value: string;
};

const Card = ({ Value }: CardProps) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        alt="slika"
      />
      <h5 className="card__title">Naslov</h5>
      <p className="card__desc">{Value}</p>
      <div className="card__footer">
        <button className="card__button--1">OK</button>
        <button className="card__button--2">Cancel</button>
      </div>
    </div>
  );
};

export default Card;
