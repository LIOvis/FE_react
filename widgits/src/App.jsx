import viteLogo from "/vite.svg";
import "../src/styles/main.scss";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Routing from "./components/navigation/Routing";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}
