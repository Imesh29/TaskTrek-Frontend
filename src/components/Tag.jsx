import React from "react";
import "./Tag.css";

const Tag = (props) => {
  return (
    <button className="tag" type="button">
      {props.tagName}
    </button>
  );
};

export default Tag;
