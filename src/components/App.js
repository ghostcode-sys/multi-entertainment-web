import React from "react";
import '../App.css';
import ChatHead from "./ChatHead";
import Header from "./Header"
import NewsComp from "./NewsComp";
import NotiHead from "./NotiHead"

function App() {
  return (
    <div>
      <Header />
      <NewsComp />
      <NotiHead/>
      <ChatHead />
    </div>
  );
}

export default App;
