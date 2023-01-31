import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}
