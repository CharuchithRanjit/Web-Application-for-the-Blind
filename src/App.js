import React,{useState} from "react";
import "./App.css";
import Header from "./Header";
import Subject1 from "./Subject1";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import UserProvider from "./UserProvider";
import Subject2 from "./Subject2";
import Subject3 from "./Subject3";
import Courses from "./Courses";

function App() {

  const [i,setI] = useState(0);

  return (
    <Router>
      <div className="app">
        <UserProvider>
          <Header />
        </UserProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Subject1">
            <Subject1 />
          </Route>
          <Route path="/Subject2">
            <Subject2 />
          </Route>
          <Route path="/Subject3">
            <Subject3 />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
          <Route path="/">
            <Home i={i} setI={setI} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
