import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "https://th.bing.com/th/id/OIP.olQVh4sGJxyErl427Lq1oAHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "Elon Musk",
      url: "https://th.bing.com/th/id/OIP.mgZT9yriurn6UAtp9LW-nAHaIA?w=159&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
  ]);
  return (
    <div>
      <h1>Tinder Cards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
