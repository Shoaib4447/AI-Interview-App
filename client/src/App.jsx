import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import InputForm from "./components/InputForm";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:8000/api/chat", {
        message: userInput,
      });
      setResponse(res.data.reply);
      setUserInput("");
    } catch (error) {
      console.error("API error:", error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-[#000046]  to-[#1CB5E0] text-white flex flex-col items-center '>
      <Navbar />
      <ChatBox response={response} />
      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default App;
