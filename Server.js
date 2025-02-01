const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

app.get("/quiz", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Failed to fetch quiz data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
