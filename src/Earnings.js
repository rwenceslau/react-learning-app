import React from "react";
import style from "./results.module.css"
const Earnings = ({ title, netPrice, period }) => {
  return (
    <div className={style.results}>
      <h1>{title}</h1>
      <p>{netPrice}</p>
      <h6>{period}</h6>
    </div>
  );
};

export default Earnings;
