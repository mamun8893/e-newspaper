import React from "react";
import Description from "./common/Description";
import Images from "./common/Images";
import Time from "./common/Time";
import Title from "./common/Title";

const MainPost = () => {
  return (
    <div className="mian-post-item-warp">
      <div className="post-content">
        <Title />
        <Description />
        <Time />
      </div>
      <Images />
    </div>
  );
};

export default MainPost;
