import { Switch, Redirect, Route } from "react-router-dom";

import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Counter from "../pages/Counter";
import ToggleGreeting from "../pages/ToggleGreeting";
import ToggleVisibility from "../pages/ToggleVisibility";

export default function Routing() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect exact from="/" to="/home" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/toggle-greeting" component={ToggleGreeting} />
      <Route path="/toggle-visibility" component={ToggleVisibility} />
      <Route component={NoPage} />
    </Switch>
  );
}
