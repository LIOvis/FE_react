import viteLogo from "/vite.svg";
import "../src/styles/main.scss";

import { BrowserRouter } from "react-router-dom";

import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";
import Routing from "./components/navigation/Routing";

export default function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
