import React from "react";
import PropTypes from "prop-types";

const FullName = (props) => {
  console.log(props);
  return (
    <div>
      <h1>My name is {props.name}</h1>
    </div>
  );
};
FullName.defaultProps = {
  name: "Amine Kacem",
};

FullName.propTypes = {
  name: PropTypes.string,
};
export default FullName;
