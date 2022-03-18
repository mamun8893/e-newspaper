import React from "react";

const Title = ({ title }) => {
  return (
    <div className="heading">
      <h2>
        <a href="#link"> {title}</a>
      </h2>
    </div>
  );
};

export default Title;
