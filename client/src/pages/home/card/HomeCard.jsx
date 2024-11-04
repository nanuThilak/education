import React from "react";
import "./homeCard.css";

const HomeCard = ({ img, heading, course, btn, price }) => {
  return (
    <div className="homeCard">
      <div className="homeCard__img">
        <img src={img} alt="" width={"200px"} height={"250px"} />
      </div>
      <div className="homeCard__content">
        <small className="homeCard__price">{price}</small>
        <div className="homeCard__heading">
          <h3>{heading}</h3>
        </div>
        <small>{course}</small>
        <button>{btn}</button>
      </div>
    </div>
  );
};

export default HomeCard;
