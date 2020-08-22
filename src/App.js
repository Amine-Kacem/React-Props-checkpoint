import React from "react";

import FullName from "./profile/component/FullName";
import Bio from "./profile/component/Bio";
import Profession from "./profile/component/Profession";
import developer from "./developer.jpg";
import ActionLink from "./profile/component/HandleName";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red", height: 100, weight: 100 }}>
        Checkpoint React Props
      </h1>
      <FullName name="Amine Kacem" />
      <ActionLink />
      <Bio bio="My name is Amine Kacem i am 27 years old and i wanna be a web developer." />
      <Profession job="web developer" />
      <img src={developer} />
    </div>
  );
}

export default App;
