import React from "react";

const Images = ({ images, title }) => {
  return (
    <div className="post-image">
      <a href="#link">
        <img src={images} className="img-fluid" alt={title} />
      </a>
    </div>
  );
};

export default Images;
