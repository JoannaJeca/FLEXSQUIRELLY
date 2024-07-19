import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level18 from "../page/Home/Level18";
import Level2 from "../page/Home/Level2";
import Level3 from "../page/Home/Level3";
import Level4 from "../page/Home/Level4";
import Level6 from "../page/Home/Level6";
import Level7 from "../page/Home/Level7";
import Level8 from "../page/Home/Level8";
import Levels9 from "../page/Home/Levels9";
import Level10 from "../page/Home/Level10";
import Level5 from "../page/Home/Level5";
// import Level19 from "../page/Home/Level19";
// import Level20 from "../page/Home/Level20";
// import Level21 from "../page/Home/Level21";
import Level22 from "../page/Home/Level22";
import Level23 from "../page/Home/Level23";
import Level24 from "../page/Home/Level24";
// import Level11 from "../page/Home/Level11";
import Level12 from "../page/Home/Level12";
import Level13 from "../page/Home/Level13";
import Level14 from "../page/Home/Level14";
import Level15 from "../page/Home/Level15";
import Level16 from "../page/Home/Level16";
// import Level17 from "../page/Home/Level17";
import WelcomePage from "../page/Home/WelcomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/levela",
    element: <Main />,
  },
  {
    path: "/levelb",
    element: <Level2 />,
  },
  {
    path: "/levelc",
    element: <Level3 />,
  },
  {
    path: "/leveld",
    element: <Level4 />,
  },
  {
    path: "/levele",
    element: <Level5 />,
  },
  {
    path: "/levelf",
    element: <Level6 />,
  },
  {
    path: "/levelg",
    element: <Level7 />,
  },
  {
    path: "/levelh",
    element: <Level8 />,
  },
  {
    path: "/leveli",
    element: <Levels9 />,
  },
  {
    path: "/levelj",
    element: <Level10 />,
  },
  // {
  //   path: "/level11",
  //   element: <Level11 />,
  // },
  {
    path: "/levelk",
    element: <Level12 />,
  },
  {
    path: "/levell",
    element: <Level13 />,
  },
  {
    path: "/levelm",
    element: <Level14 />,
  },
  {
    path: "/leveln",
    element: <Level15 />,
  },
  {
    path: "/levelo",
    element: <Level16 />,
  },
  // {
  //   path: "/level17",
  //   element: <Level17 />,
  // },
  {
    path: "/levelp",
    element: <Level18 />,
  },
  // {
  //   path: "/level",
  //   element: <Level19 />,
  // },
  // {
  //   path: "/levelq",
  //   element: <Level20 />,
  // },
  // {
  //   path: "/level21",
  //   element: <Level21 />,
  // },
  {
    path: "/levelq",
    element: <Level22 />,
  },
  {
    path: "/levelr",
    element: <Level23 />,
  },
  {
    path: "/levels",
    element: <Level24 />,
  },
]);
