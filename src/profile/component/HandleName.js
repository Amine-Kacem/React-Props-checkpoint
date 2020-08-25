import React from "react";
import Button from "@material-ui/core/Button";

function ActionLink(props) {
  // function HandleName(e) {
  //   e.preventDefault();
  //   props.handleNamee(props.name);
  //   // alert("Amine Kacem");
  // }
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => props.handleNamee(props.name)}
    >
      Show me the name
    </Button>
  );
}

export default ActionLink;
