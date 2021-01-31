import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AsteroidForm from "./components/AsteroidForm";
import RandomAsteroids from "./components/RandomAsteroids";
import RandomAsteroidView from "./components/RandomAsteroidView";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/asteroid/:id">
          <RandomAsteroidView />
        </Route>
        <Route path="/random-asteroids">
          <RandomAsteroids />
        </Route>

        <Route path="/" exact>
          <AsteroidForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
