import { Switch, Redirect, Route } from "react-router-dom";

import Zim from "../pages/Zim";
import Gir from "../pages/Gir";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Minimoose from "../pages/Minimoose";

export default function Routing() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect exact from="/" to="/home" component={Home} />
      <Route path="/zim" component={Zim} />
      <Route path="/gir" component={Gir} />
      <Route path="/minimoose" component={Minimoose} />
      <Route component={NoPage} />
    </Switch>
  );
}
