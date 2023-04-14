import Button from "../components/button";
import Card from "../components/card";
import Card2 from "../components/card2";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/FlexExe";
import Input from "../components/input";
import Modal from "../components/modal";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/TransformExe";
import Formfield from "../components/formfield";

const Exe = () => {
  return (
    <>
      <div className="container">
        <h1>Button</h1>
        <Button />
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
          <h1>Modal (if i had one)</h1>
          <Modal />
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
          <footer className="footer">
            <Pagination />
          </footer>
        </div>
      </div>
    </>
  );
};

export default Exe;
