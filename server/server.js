const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/data", (req, res) => {
  const data = req.body;
  console.log(data);

  res.json(data);
});

app.listen(5000);
