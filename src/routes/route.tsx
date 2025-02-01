import App from "@/App";
import About from "@/pages/about/About";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AllBicycle from "@/pages/bicycle/AllBicycle";
import BicycleDetails from "@/pages/bicycle/BicycleDetails";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notfound/NotFound";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "all-bicycles",
        element: <AllBicycle />,
      },
      {
        path: "bicycle-details/:cycleId",
        element: <BicycleDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
