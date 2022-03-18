import React from "react";
import Description from "./common/Description";
import Images from "./common/Images";
import Time from "./common/Time";
import Title from "./common/Title";

const MainPost = ({ mainPostData }) => {
  return (
    <div className="mian-post-item-warp">
      <div className="post-content">
        <Title title={mainPostData?.title} />
        <Description description={mainPostData?.description} />
        <Time time={mainPostData?.time} />
      </div>
      <Images images={mainPostData?.photo} title={mainPostData?.title} />
    </div>
  );
};

export default MainPost;
