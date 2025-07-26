import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="btn mb-3 border border-primary rounded-3 border-1 me-1"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
