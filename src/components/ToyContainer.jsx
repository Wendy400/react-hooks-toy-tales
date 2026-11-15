import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    /* Render the collection of ToyCards */
    <div id="toy-collection"> 
    <ul>
    {toys.map((toy)=> (
      <ToyCard key ={toy.id}
          toys= {toy}
          />
        

    ))}
    </ul>
    </div>
  );
}

export default ToyContainer;
