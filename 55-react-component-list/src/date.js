import React from "react";

const TodayDate = ()=>{
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const today = `${month}/${day}/${year}`;
    console.log(today);
    
return <p>{today}</p>;
}

export default TodayDate;