import Card from "../components/card";
import Card2 from "../components/card2";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/FlexExe";
import Input from "../components/input";
import Modal from "react-bootstrap/Modal";

import Tags from "../components/tags";
import TransformExe from "../components/TransformExe";
import Formfield from "../components/formfield";
import Pagination from "react-bootstrap/Pagination";

import Button from "react-bootstrap/Button";
import { useState } from "react";
const Exe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <div className="container">
        <h1>Button</h1>
        <Button variant="dark">Click me!</Button>
      </div>
      <div className="container">
        <h1>input</h1>
        <div>
          <Input validation="my name jeff" />
          <Input label="First Name" />
          <Input label="Last Name" rounded />
        </div>
        <div className="container">
          <h1>Checkbox</h1>
          <Checkbox />
        </div>
        <br />
        <div className="container">
          <h1>Formfield</h1>
          <Formfield />
        </div>
        <div className="container">
          <h1>Tags</h1>
          <Tags />
        </div>
        <div className="container">
          <Button variant="dark" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <br />
        <div className="container">
          <h2>transform property exercise</h2>

          <div className="container container--transform">
            <TransformExe />
          </div>
          <br />
          <h2>Flex vježba</h2>
          <span>
            <strong>Flex</strong>
          </span>
          <div className="container--title"></div>
          <div className="container container--title">
            <FlexExe />
          </div>
          <div className="card__grid">
            <Card Value=" Tekst sa Card props 1 letsgooo Tekst sa Card props 1 letsgooo" />
            <Card Value="drugaciji tekst sa drugacijim props valueom" />
            <Card Value="i onda opet jos jedan drugaciji tekst" />
            <Card Value="Crusty Crab pizza is the pizza" />
          </div>
          <div className="card2__grid">
            <Card2
              Gameweek="Gameweek 17"
              Prize="Match Worn Jersey"
              GamePoints="954"
              GameEntries="1234"
              DaysRemaining="4 days"
            />
            <Card2
              Gameweek="Gameweek 18"
              Prize="Match Worn Boots"
              GamePoints="1024"
              GameEntries="1423"
              DaysRemaining="20 days"
            />
            <Card2
              Gameweek="Gameweek 19"
              Prize="Signed Shirt"
              GamePoints="1337"
              GameEntries="1467"
              DaysRemaining="13 days"
            />
            <Card2
              Gameweek="Gameweek 20"
              Prize="2x Tickets To Next Match"
              GamePoints="1129"
              GameEntries="1265"
              DaysRemaining="14 days"
            />
          </div>

          <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exe;
