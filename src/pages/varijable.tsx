import { useState } from "react";

const Zadatak = () => {
  const voće: string = "banana";
  const kalorijeVoća: string = "105kcal";
  const bojaVoća: string = "Žuta";
  const jestivostVoća: boolean = true;

  return (
    //tablica
    <table>
      <tr>
        <th>Voće</th>
      </tr>
      <tr>
        <td>{voće}</td>
        <td>{kalorijeVoća}</td>
        <td>{bojaVoća}</td>
        <td>{jestivostVoća}</td>
      </tr>
    </table>
  );
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  //varijable zadatka
  const voće: string = "banana";
  const kalorijeVoća: string = "105kcal";
  const bojaVoća: string = "Žuta";
  const jestivostVoća: boolean = true;

  //varijable van zadatka
  const pi: number = 3.14;
  const test: number = 4;
  const number: number = 15;
  let color: "red" | "green" = "red";
  //Dostupne marke automobila
  let car: "bmw" | "audi" | "lexus" = "bmw";
  const obj = {
    name: "Ivan",
    lastName: "predavač",
    age: 29,
    height: 183,
    guitars: {
      prva: "gitara1",
      druga: "gitara2",
      treca: "gitara3",
    },
  };

  color = "green";

  //Obje vrijednosti moraju biti "true" kako bi programo ušao u IF statement
  if (pi & test) {
    console.log(pi);
  }
  //Ovdje samo jedna mora biti true
  if (pi | test) {
  }

  const addOnOurValue = (ourValue: number, secondValue: number) => {
    return number + ourValue + secondValue;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    console.log(input.value);
    setValue(Number(input.value));
  };

  return (
    <div className="container">
      <h1>varijabla vjezba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi}</h4>
        <h4>Vrijednost color varijable je: {color}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <hr />
      <div>
        <h4>Vrijednost našeg state-a je: {value}</h4>
        <input type="number" className="input" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>rezultat naše funkcije je: {addOnOurValue(99, 450)}</div>
      <div>
        <h4>
          Vrijednosti našeg objeketa su: {obj.name} {obj.lastName}
        </h4>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
      </div>
      <div>
        <h4>
          Gitare: {obj.guitars.prva} {obj.guitars.druga} {obj.guitars.treca}
        </h4>
      </div>
      <hr />
      <div>
        <table>
          <tr>
            <th>Voće</th>
            <td>{voće}</td>
          </tr>
          <tr>
            <th>Broj kalorija</th>
            <td>{kalorijeVoća}</td>
          </tr>
          <tr>
            <th>Boja</th>
            <td>{bojaVoća}</td>
          </tr>
          <tr>
            <th>Jestivost</th>
            <td>{jestivostVoća ? "da" : "ne"}</td>
          </tr>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Varijable;
