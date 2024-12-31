import React, { useState } from "react";

function DiwaliGift() {
  const [person, setPerson] = useState("");
  const [addPerson, setAddPerson] = useState([]);

  const gifts = [
    "Home Decor",
    "Books",
    "Gift Cards",
    "DIY Gifts Kits",
    "Tech Gadgets",
  ];

  function handleInputPerson(e) {
    setPerson(e.target.value);
  }

  function handleAddPerson() {
    if (person.trim() !== "") {
      setAddPerson([...addPerson, { person, gift: null }]);
      setPerson("");
    }
  }
  function assignGift() {
    const assignedGifts = addPerson.map((p, index) => ({
      ...p,
      gift: gifts[index % gifts.length],
    }));
    setAddPerson(assignedGifts);
  }

  function shuffleGIfts() {
    const shuffledGifts = [...gifts].sort(() => Math.random() - 0.5);
    const assignGifts = addPerson.map((p, index) => ({
      ...p,
      gift: shuffledGifts[index % shuffledGifts.length],
    }));
    setAddPerson(assignGifts);
  }

  function handleReset() {
    setAddPerson([]);
  }

  return (
    <div className="diwali-app">
      <h1>🎇 New Year Assignment 🎁</h1>
      <div className="form">
        <input
          className="input-field"
          onChange={handleInputPerson}
          type="text"
          placeholder="Enter person's name"
          value={person}
        />
        <button className="btn" onClick={handleAddPerson}>
          Add Person
        </button>
        <button className="btn" onClick={assignGift}>
          Assign Gift
        </button>
        <button className="btn" onClick={shuffleGIfts}>
          Shuffle Gifts
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <ul className="list">
        {addPerson.map((p, index) => (
          <li className="list-item" key={index}>
            {p.person} - {p.gift && `${p.gift}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiwaliGift;
