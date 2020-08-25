import React from "react";
import PropTypes from "prop-types";

const Bio = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.bio}</p>
    </div>
  );
};

Bio.defaultProps = {
  bio:
    "My name is Amine Kacem i am 27 years old and i wanna be a web developer.",
};

Bio.propTypes = {
  bio: PropTypes.string,
};
export default Bio;
