import React, { useState } from "react";

function DiwaliGift() {
  const [gift, setGift] = useState([]);
  const [person, setPerson] = useState("");
  const [addPerson, setAddPerson] = useState([]);

  const gifts = ["Sweets", "firecrackers", "Sherwani", "kurta Pajama"];

  function handleInputPerson(e) {
    setPerson(e.target.value);
  }

  function handleAddPerson() {
    if (person.trim() !== "") {
      setAddPerson((prev) => [...prev, person]);
      setPerson("");
    }
  }

  function handleAssignShuffle() {
    if (person.length === 0) {
      alert("Please add person before assigning the gifts");
      return;
    }
    const shuffledgifts = [...gifts].sort(() => Math.random() - 0.5); // used sort for shuffle only shuffle
    const assignGifts = addPerson.map(
      (person, index) =>
        `${person} - ${shuffledgifts[index % shuffledgifts.length]}`
    );
    setGift(assignGifts);
  }

  function handleReset() {
    setPerson("");
    setGift([]);
    setAddPerson([]);
  }

  return (
    <div className="diwali-app">
      <h1>🎇 Diwali Gift Assignment 🎁</h1>
      <div className="form">
        <input
          className="input-field"
          onChange={handleInputPerson}
          type="text"
          placeholder="Enter Name"
          value={person}
        />
        <button className="btn" onClick={handleAddPerson}>
          Add Person
        </button>
        <button className="btn" onClick={handleAssignShuffle}>
          Assign Gift
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <ul className="list">
        {addPerson.map((person, index) => (
          <li className="list-item" key={index}>
            {/* <span>{person}</span> */}
            <span>{gift[index] || "No gift assigned"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiwaliGift;
