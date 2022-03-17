import React from "react";

const MainPost = () => {
  return (
    <div className="mian-post-item-warp">
      <div className="post-content">
        <div className="heading">
          <h2>
            <a href="#link"> সরকার নির্ধারিত দরে ভোজ্যতেল বেচাকেনার আহ্বান</a>
          </h2>
        </div>
        <div className="description">
          <p>
            <a href="#link">
              চলতি সপ্তাহে পাইকারি বাজারটিতে ভোক্তা অধিকার সংরক্ষণ পরিষদের
              কর্মকর্তারা অভিযান চালান। গত বুধবারও এক ব্যবসায়ীকে ...
            </a>
          </p>
        </div>
        <div className="time">
          <p>২০ মিনিট আগে</p>
        </div>
      </div>
      <div className="post-image">
        <a href="#link">
          <img
            src="https://images.prothomalo.com/prothomalo-bangla%2F2022-03%2F9be74ca9-e828-4708-882b-1625273bf55a%2Fc6a8e6ef_c3e8_4b08_bdbf_54c6721daccf.jpg?rect=138%2C0%2C1350%2C900&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0"
            className="img-fluid"
            alt="ঢাকায় মামুনুলের বিরুদ্ধে ১৭ মামলা"
          />
        </a>
      </div>
    </div>
  );
};

export default MainPost;
