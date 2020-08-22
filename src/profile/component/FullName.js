import React from "react";

const FullName = (props) => {
  console.log(props);
  return (
    <div>
      <h1>My name is {props.name}</h1>
    </div>
  );
};

export default FullName;
