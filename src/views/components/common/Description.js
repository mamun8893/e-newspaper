import React from "react";

const Description = ({ description }) => {
  return (
    <div className="description">
      <p>
        <a href="#link">{description?.slice(0, 150)}</a>
      </p>
    </div>
  );
};

export default Description;
