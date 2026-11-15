import React from "react";

function ToyCard({toys}) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toys.name /* Toy's Name */}</h2>
      <img
        src={toys.image /* Toy's Image */}
        alt={toys.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toys.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
