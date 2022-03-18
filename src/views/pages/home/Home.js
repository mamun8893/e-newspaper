import React from "react";
import MainPost from "../../components/MainPost";
import SecondPost from "../../components/SecondPost";
import ThirdPost from "../../components/ThirdPost";
import Adimage from "../../../assets/images/ad.jpg";
import AdsmallImg from "../../../assets/images/ad-small.png";
import useFetch from "../../../hook/useFetch";
import Images from "../../components/common/Images";
import Title from "../../components/common/Title";
import Time from "../../components/common/Time";

const Home = () => {
  const { data, loading } = useFetch("./data.json");

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (data.length > 0) {
    data.sort((obj1, obj2) => {
      return obj1.sort - obj2.sort;
    });
  }

  const mainPostData = data.slice(0, 1);
  const secondPost = data.slice(1, 5);
  const thirdPost = data.slice(5, 11);
  const rightPost = data.slice(11, 13);

  return (
    <div className="main-area">
      {/* Main  Area Start*/}
      <div className="m-container">
        {/* Post Area Start */}
        <div className="main-warper">
          <div className="all-post-left">
            <div className="main-post-warper post-row1">
              <MainPost mainPostData={mainPostData[0]} />
              {secondPost.map((postData) => (
                <SecondPost key={postData.id} postData={postData} />
              ))}
            </div>
            <div className="post-row2">
              {thirdPost.map((postData) => (
                <ThirdPost key={postData.id} postData={postData} />
              ))}
            </div>
          </div>
          <div className="add-post-right">
            <div className="small-ad-widget">
              <a href="#link">
                <img src={AdsmallImg} className="img-fluid" alt="ad" />
              </a>
            </div>

            <div className="podt-item">
              <Images
                images={rightPost[0]?.photo}
                title={rightPost[0]?.title}
              />
              <div className="post-content">
                <Title title={rightPost[0]?.title} />
                <Time time={rightPost[0]?.time} />
              </div>
            </div>
            <div className="third-post-item">
              <Images
                images={rightPost[1]?.photo}
                title={rightPost[1]?.title}
              />

              <div className="post-content">
                <Title title={rightPost[1]?.title} />
                <Time time={rightPost[1]?.time} />
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
        {/* Post Area End */}

        {/* Ad Widget Area  Start*/}
        <div className="ad-widget-area text-center">
          <a href="#link">
            <img src={Adimage} className="img-fluid" alt="ad" />
          </a>
        </div>
        {/* Ad Widget Area  End*/}
      </div>
      {/* Main  Area End*/}
    </div>
  );
};

export default Home;
