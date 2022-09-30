import React from "react";
import Emojis from "./Emojis";
import emojipedia from "../emojipedia"; 


function createEmojis(emojiTerm){
  return (
    <Emojis 
      id={emojiTerm.id} 
      key={emojiTerm.id}   
      emoji={emojiTerm.emoji} 
      name={emojiTerm.name} 
      meaning={emojiTerm.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
       {emojipedia.map(createEmojis)}
      </dl>
    </div>
  );
}

export default App;
