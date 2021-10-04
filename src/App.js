import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😢": "Sad",
  "🥡": "Takeout Box",
  "❤": "Love",
  "😂": "Laughing"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont't have this in dictionary";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>The First React App</h1>
      <input onChange={emojiInputChangeHandler} />
      <h2> {meaning}</h2>
    </div>
  );
}
