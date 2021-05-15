
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/info" >
            <Info />
          </Route>
          <Route exact path="/details" >
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
