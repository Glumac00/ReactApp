import Header from "./components/header";
import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exe from "./pages/exe";
import Ispit from "./pages/ispit";
import Home from "./pages/home";
import Mlinar from "./pages/mlinar";

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
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
