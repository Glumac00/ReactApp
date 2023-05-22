import { useEffect } from "react";
const a = ["1", "2", "3", "4"];
const b = ["5", "6", "7", "8"];

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: number, b: number) => {
    return a + b;
  };
  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = (a: string[], b: string[]) => {
    return a.concat(b);
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  //4. Funkcija koja zbraja sve brojeve iz array-a
  const sumArray = (numbers: number[]): number => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum + numbers[i];
    }
    return sum;
  };
  const result = sumArray(numbers);

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    lastName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lastName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return person.firstName + " " + person.lastName;
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32;
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: string) => {
    let reversedStr = "";
    for (let i = str.length - 1; i > 0; i--) {
      reversedStr + str[i - 1];
    }
    return reversedStr;
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    console.log("vjezba 1: " + add(4, 5));
    console.log("vjezba 2: " + concatArrays(a, b));
    console.log("vjezba 3: " + countToTen());
    console.log("vjezba 4: " + result);
    console.log("vjezba 5: " + getFullName(user));
    console.log("vjezba 6: " + celsiusToFahrenheit(35));
    console.log("vjezba 7: " + reverseString("naopacke"));
  }, []);
  return <div className="container"></div>;
};

export default Vjezba1505;
