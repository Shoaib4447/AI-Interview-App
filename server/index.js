import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/chat", async (req, res) => {
  const message = req.body.message;
  if (!message || message.trim() === "")
    return res.status(400).json({ error: "Message is required" });

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You're an interviewer..." },
      { role: "user", content: message },
    ],
    temperature: 0.7,
  };

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  try {
    // const response = await axios.post(
    //   "https://api.openai.com/v1/chat/completions",
    //   payload,
    //   options
    // );
    // console.log(
    //   "🧠 Full OpenAI Response:",
    //   JSON.stringify(response.data, null, 2)
    // );
    // const reply = response.data.choices[0].message.content;
    const reply = "This is a mock interview answer from AI.";
    res.json({ reply });
  } catch (error) {
    console.error("🛑 OpenAI API error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);

      if (error.response.status === 429) {
        return res.status(429).json({
          error:
            "The system is currently busy or unavailable — please try again later.",
        });
      }
    }

    res.status(500).json({ error: "Something went wrong with OpenAI API" });
  }
});

// Set PORT from env
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running at port: http://localhost:${PORT}`);
});
