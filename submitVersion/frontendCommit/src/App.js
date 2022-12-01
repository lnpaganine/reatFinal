import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";

import Error from "./components/Error";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import FoodPage from "./components/FoodPage";

import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/food" component={FoodPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
export default App;
