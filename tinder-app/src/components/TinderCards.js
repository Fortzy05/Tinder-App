import React, { useEffect, useState } from "react";
import database from "./firebase";
import TinderCard from "react-tinder-card";

export const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "",
    },
    {
      name: "Elon Musk",
      url: "",
    },
  ]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
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
    </div>
  );
};

export default TinderCards;
