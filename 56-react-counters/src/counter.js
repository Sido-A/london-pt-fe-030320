import React, { useState } from "react";
import "./counter.css";


 const Counter = () => {
   const [counter, setCounter] = useState(0);
   const increase = () => setCounter(counter + 1);
   const decrease = () => setCounter(counter - 1);

   return (
     <div className="counterWrapper">
       <div className="inner">
         <h1>{counter}</h1>

         <div className="counterButtonWrapper">
           <button onClick={increase} className="increment">
             +
           </button>
           <button onClick={decrease} className="decrement">
             -
           </button>
         </div>
       </div>
     </div>
   );
 };

 export default Counter;