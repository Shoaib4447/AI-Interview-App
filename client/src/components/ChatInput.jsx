import React, { useState } from "react";

const ChatInput = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          id='user-input'
          placeholder='Write your answers here'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type='button'>Send</button>
      </div>
    </form>
  );
};

export default ChatInput;
