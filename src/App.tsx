import Header from "./components/header";
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0305 from "./pages/vjezba0305";
import Breweries from "./pages/breweries";
import Europe from "./pages/europe";
import Africa from "./pages/africa";
import Chat from "./pages/chat";
import Vjezba1505 from "./pages/vjezba1505";
import ToDoList from "./pages/todolist";
import ParcijalniIspit from "./pages/parcijalnitest";
import Vjezba2405 from "./pages/vjezba2405";
import Bootstrap from "./pages/bootstrap";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Ispit",
      element: <Ispit />,
    },
    {
      path: "/Exe",
      element: <Exe />,
    },
    {
      path: "/Mlinar",
      element: <Mlinar />,
    },
    {
      path: "/Varijable",
      element: <Varijable />,
    },
    {
      path: "/Petlje",
      element: <Petlje />,
    },
    {
      path: "/Vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/Vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/Vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/Breweries",
      element: <Breweries />,
    },
    {
      path: "/Europe",
      element: <Europe />,
    },
    {
      path: "/Africa",
      element: <Africa />,
    },
    {
      path: "/Chat",
      element: <Chat />,
    },
    {
      path: "/Vjezba1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/todolist",
      element: <ToDoList />,
    },
    {
      path: "/ParcijalniIspit",
      element: <ParcijalniIspit />,
    },
    {
      path: "/Vjezba2405",
      element: <Vjezba2405 />,
    },
    {
      path: "/Bootstrap",
      element: <Bootstrap />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
