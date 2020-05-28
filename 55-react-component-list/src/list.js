import React from "react";

const List = (animals) => {
  return animals.map((animal) =>(
   <li key={animal}>{animal}</li>
));
  }
export default List;
