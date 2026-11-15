import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate}) {
  return (
    /* Render the collection of ToyCards */
    <div id="toy-collection"> 
    <ul>
    {toys.map((toy)=> (
      <ToyCard key ={toy.id}
          toys= {toy}
          onDonate= {onDonate}
          />
        

    ))}
    </ul>
    </div>
  );
}

export default ToyContainer;
