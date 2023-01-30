import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}
