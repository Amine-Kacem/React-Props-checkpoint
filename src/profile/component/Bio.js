import React from "react";

const Bio = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.bio}</p>
    </div>
  );
};

export default Bio;
