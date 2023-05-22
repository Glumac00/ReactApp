const Vjezba2604 = () => {
  //nizovi
  let arr = ["mama", "tata", "baka", "đedo"];

  arr.push("Antun");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "tata") {
      delete arr[i];
    }
    console.log(arr[i]);
  }

  //funkcije
  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //objekti

  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    Karoserija: "limuzina",
    Snaga: 165,
    Boja: "Crna - s efektom",
    Pogon: "AWD",
    ObujamMotora: 3000,
    Godina: 2007,
    Proizvodac: "VW",
  };

  const recenica =
    "Imam auto proizvođaća " +
    car.Proizvodac +
    " čija je godina modela " +
    car.Godina +
    " čija službena boja u knjižici glasi " +
    car.Boja +
    ", obujma motora " +
    car.ObujamMotora +
    " koji prozivodi snagu od " +
    car.Snaga +
    " KW";

  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak

  const nizBrojeva = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18.5,
    17.5, 16.5, 15.5, 14.5, 13.5,
  ];

  function najveciBrojuNizu(arr: string | any[]) {
    let najveciBroj;
    for (let i = 0; i < arr.length; i++) {
      if (!najveciBroj) {
        najveciBroj = arr[i];
      }
      if (arr[i] > najveciBroj) {
        najveciBroj = arr[i];
      }
    }
    return najveciBroj;
  }
  console.log(najveciBrojuNizu(nizBrojeva));

  return (
    <div className="container">
      <h1>Nizovi</h1>
      <br />
      <h2>Nizovi</h2>
      <div>{bringBaka()}</div>
      <h2>Funkcije</h2>
      <div>{printText("text koj se returna")}</div>
      <h2>Objekti</h2>
      <div>{recenica}</div>
      <h2>JSON</h2>
      <div>{JSON.stringify(car, null, 2)}</div>
      <h2>Printanje Value-a</h2>
      <div>{printValue("Snaga")}</div>
      <h2>Biggest number</h2>
      <div>(je console loggan)</div>
    </div>
  );
};

export default Vjezba2604;
