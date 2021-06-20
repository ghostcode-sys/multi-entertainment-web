import React from "react";
import { Route, Switch } from "react-router-dom"
import '../App.css';
import ChatHead from "./ChatHead";
import Header from "./Header"
import NewsComp from "./NewsComp";
import NotiHead from "./NotiHead"
import VideoComp from "./VideoComp";
import Group from "./Group";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"><NewsComp /></Route>
        <Route path="/Notification"><NotiHead /> </Route>
        <Route path="/Chat"><ChatHead /></Route>
        <Route path="/Video"><VideoComp /></Route>
        <Route path="/Group"><Group/></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/Dashboard"><Dashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;
