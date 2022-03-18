import React from "react";
import Description from "./common/Description";
import Time from "./common/Time";
import Title from "./common/Title";

const SecondPost = ({ postData }) => {
  return (
    <>
      <div className="second-post-item">
        <div className="post-content">
          <Title title={postData?.title} />
          <Description description={postData?.description} />
          <Time time={postData?.time} />
        </div>
      </div>
    </>
  );
};

export default SecondPost;
