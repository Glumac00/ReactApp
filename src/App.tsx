import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="app">
      {" "}
      <Header />
      <Navigation />
    </div>
  );
};

export default App;
