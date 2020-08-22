import React from "react";
import Button from "@material-ui/core/Button";

function ActionLink() {
  function HandleName(e) {
    e.preventDefault();
    alert("Amine Kacem");
  }
  return (
    <Button variant="contained" color="primary" onClick={HandleName}>
      Show me the name
    </Button>
  );
}

export default ActionLink;
