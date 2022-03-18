import React from "react";
import moment from "moment";
import "moment/locale/bn-bd";

const Time = ({ time }) => {
  const newDate = new Date(time);
  const minutes = moment(new Date()).diff(moment(newDate), "minutes");
  const hours = moment(new Date()).diff(moment(newDate), "hours");

  moment.locale("bn-bd");
  let date = moment(newDate).format("LL");
  if (minutes < 60) {
    date = `${minutes} মিনিট আগে`;
  } else if (hours < 24) {
    date = `${hours} ঘণ্টা আগে`;
  }

  return (
    <div className="time">
      <p>{date}</p>
    </div>
  );
};

export default Time;
