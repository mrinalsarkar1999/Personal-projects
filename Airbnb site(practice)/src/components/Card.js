import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={`./icons/${props.coverImg}`}
        className="card-image"
        alt="card profile"
      ></img>
      <div className="card-stats">
        <img src="./icons/star.png" alt="star icon" className="star-img"></img>
        <span className="rating">{props.stats.rating}</span>
        <span className="review-count">
          ({props.stats.reviewCount})&nbsp;*&nbsp;
        </span>
        <span className="country">{props.location}</span>
      </div>
      <div className="card-details">
        <p className="card-title">{props.title}</p>
        <span className="price">From ${props.price}</span>
        <span> / person</span>
      </div>
    </div>
  );
}
