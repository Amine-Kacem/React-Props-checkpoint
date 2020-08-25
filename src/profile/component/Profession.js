import React from "react";
import PropTypes from "prop-types";

const Profession = (props) => {
  console.log(props);
  return (
    <div>
      <h1>I am a {props.job}</h1>
      {props.children}
    </div>
  );
};

Profession.defaultProps = {
  job: "web developer",
};

Profession.propTypes = {
  job: PropTypes.string,
};

export default Profession;
