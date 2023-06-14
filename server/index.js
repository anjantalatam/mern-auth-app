const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

// this parses the body to json
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is up");
});

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
