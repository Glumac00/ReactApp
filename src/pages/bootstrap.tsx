import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Grass from "./../assets/grass.png";
import Alert from "react-bootstrap/Alert";
import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
type GenderType = "male" | "female";

type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};
const frontendRazred: StudentType[] = [
  {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    gender: "male",
    height: 183,
    hobby: "Cycling",
    employed: true,
    favoriteColor: "red",
  },
  {
    name: "Goran",
    lastName: "Viljanac",
    age: 19,
    gender: "male",
    height: 185,
    hobby: "Musician",
    employed: true,
    favoriteColor: "green",
  },
  {
    name: "Katharina",
    lastName: "Zlosa",
    age: 27,
    gender: "female",
    height: 180,
    hobby: "reading",
    employed: true,
    favoriteColor: "green",
  },
  {
    name: "Antun",
    lastName: "Glumac",
    age: 22,
    gender: "male",
    height: 185,
    hobby: "Football",
    employed: false,
    favoriteColor: "Red",
  },
  {
    name: "Nikolina",
    lastName: "Kirčanski",
    age: 40,
    gender: "female",
    height: 164,
    hobby: "Martial arts",
    employed: true,
    favoriteColor: "black",
  },
  {
    name: "Robert",
    lastName: "Đujić",
    age: 24,
    gender: "male",
    height: 182,
    hobby: "Books, movies, games",
    employed: false,
    favoriteColor: "silver",
  },
  {
    name: "Monika",
    lastName: "Ivankovic",
    age: 23,
    gender: "female",
    height: 164,
    hobby: "roller skating",
    employed: true,
    favoriteColor: "grey",
  },
  {
    name: "Maja",
    lastName: "Juratovac",
    age: 32,
    gender: "female",
    height: 169,
    hobby: "dancing",
    employed: true,
    favoriteColor: "blue",
  },
  {
    name: "Ivan",
    lastName: "Puljić",
    age: 25,
    gender: "male",
    height: 175,
    hobby: "running",
    employed: false,
    favoriteColor: "blue",
  },
  {
    name: "Sara",
    lastName: "Cindric",
    age: 24,
    gender: "female",
    height: 161,
    hobby: "writing",
    employed: false,
    favoriteColor: "black",
  },
  {
    name: "Kristian",
    lastName: "Radoš",
    age: 30,
    gender: "male",
    height: 188,
    hobby: "Netflix",
    employed: true,
    favoriteColor: "blue",
  },
  {
    name: "Ivana",
    lastName: "Arbutina",
    age: 42,
    gender: "female",
    height: 166,
    hobby: "slikanje",
    employed: false,
    favoriteColor: "red",
  },
];
const Bootstrap = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyA") {
        setPosition((prevPosition) => {
          if (prevPosition >= 500) {
            alert("We have a winner!");
            return prevPosition;
          } else {
            return prevPosition + 5;
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [position2, setPosition2] = useState(0);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyB") {
        setPosition2((prevPosition) => {
          if (prevPosition >= 500) {
            alert("We have a winner!");
            return prevPosition;
          } else {
            return prevPosition + 5;
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bootstrap">
      <div className="bootstrap__header">
        <h1>Bootstrap hello!</h1>
        <Button variant="secondary">Click me!</Button>
      </div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="profile" title="Dashboard">
            <Card style={{ width: "18rem" }} className="bootstrap__body__card">
              <Card.Body>
                <Card.Title>45%</Card.Title>
                <Card.Text>Ovo je neki tekst koji nešto objašnjava</Card.Text>
              </Card.Body>
              <ProgressBar animated now={45}></ProgressBar>
            </Card>
            <Card style={{ width: "35rem" }} className="bootstrap__body__card">
              <Card.Text>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </Card.Text>
            </Card>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Visina</th>
                  <th>Hobby</th>
                </tr>
              </thead>
              <tbody>
                {frontendRazred.map((student) => {
                  return (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.lastName}</td>
                      <td>{student.height}cm</td>
                      <td>{student.hobby}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="game" title="Game">
            <div>
              <div>Player 1</div>
              <div>
                <img
                  src="https://www.vhv.rs/dpng/d/424-4240192_kyle-south-park-hd-png-download.png"
                  alt="Kyle"
                  height={100}
                  width={100}
                  className="Kyle"
                  style={{ marginLeft: position }}
                />
              </div>

              <img src={Grass} alt="grass" className="grass" />
            </div>
            <div>
              <div>Player 2</div>
              <div>
                <img
                  src="https://e7.pngegg.com/pngimages/194/745/png-clipart-eric-cartman-kyle-broflovski-cartman-sucks-stan-marsh-others-child-face.png"
                  alt="Cartman"
                  height={100}
                  width={100}
                  className="Kyle"
                  style={{ marginLeft: position2 }}
                />
              </div>

              <img src={Grass} alt="grass" className="grass" />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default Bootstrap;
