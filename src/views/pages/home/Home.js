import React from "react";
import MainPost from "../../components/MainPost";
import SecondPost from "../../components/SecondPost";
import ThirdPost from "../../components/ThirdPost";
import Adimage from "../../../assets/images/ad.jpg";

const Home = () => {
  return (
    <div className="main-area">
      {/* Main  Area Start*/}
      <div className="m-container">
        <div className="main-warper">
          <div className="all-post-left">
            <div className="main-post-warper post-row1">
              <MainPost />
              <SecondPost />
            </div>
            <div className="post-row2">
              <ThirdPost />
            </div>
            <div className="ad-widget-area">
              <img src={Adimage} className="img-fluid" alt="ad" />
            </div>
          </div>
          <div className="add-post-right">right</div>
        </div>
      </div>
      {/* Main  Area End*/}
    </div>
  );
};

export default Home;
