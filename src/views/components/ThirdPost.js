import React from "react";
import Images from "./common/Images";
import Time from "./common/Time";
import Title from "./common/Title";

const ThirdPost = ({ postData }) => {
  return (
    <>
      <div className="third-post-item">
        <Images images={postData?.photo} title={postData?.title} />
        <div className="post-content">
          <Title title={postData?.title} />
          <Time time={postData?.time} />
        </div>
      </div>
    </>
  );
};

export default ThirdPost;
