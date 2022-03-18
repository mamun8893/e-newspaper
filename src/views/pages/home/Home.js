import React from "react";
import MainPost from "../../components/MainPost";
import SecondPost from "../../components/SecondPost";
import ThirdPost from "../../components/ThirdPost";
import Adimage from "../../../assets/images/ad.jpg";
import AdsmallImg from "../../../assets/images/ad-small.png";
import useFetch from "../../../hook/useFetch";

const Home = () => {
  const { data } = useFetch("./data.json");

  data.sort((obj1, obj2) => {
    return obj1.sort - obj2.sort;
  });

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
              <a href="#link">
                <img src={Adimage} className="img-fluid" alt="ad" />
              </a>
            </div>
          </div>
          <div className="add-post-right">
            <div className="small-ad-widget">
              <a href="#link">
                <img src={AdsmallImg} className="img-fluid" alt="ad" />
              </a>
            </div>
            <div className="right-post">
              <div className="post-image mb-10">
                <a href="#link">
                  <img
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2022-03%2F2d336b63-09cc-485b-aef4-7db6c8917756%2FSequence_02_00_25_06_06_Still009.jpg?rect=0%2C0%2C1620%2C1080&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <h2>প্রথম ওয়ানডের আগে অনুশীলনে বাংলাদেশ</h2>
                <div className="time">
                  <p>২ ঘণ্টা আগে</p>
                </div>
              </div>
              <div className="main-paper">
                <div className="text">
                  <a href="#link">
                    <h2>ছাপা কাগজের মতো পড়ুন আজকের পত্রিকা</h2>
                  </a>
                </div>
                <a href="#link" className="paper-image">
                  <img
                    src="https://images.prothomalo.com/prothomalo-bangla/2021-12/8f22f0c6-f808-40df-9676-52771474d05e/epaper_img.jpg?format=webp&w=160&dpr=1.0"
                    className="img-fluid"
                    alt="paper"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main  Area End*/}
    </div>
  );
};

export default Home;
