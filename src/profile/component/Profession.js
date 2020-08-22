import React from "react";

const Profession = (props) => {
  console.log(props);
  return (
    <div>
      <h1>I am a {props.job}</h1>
      {props.children}
    </div>
  );
};

export default Profession;
