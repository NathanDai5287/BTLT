import express from "express";

const app = express();
app.use(express.json());

app.get("/one", (req, res) => {
  res.send("one");
});

app.get("/two", (req, res) => {
  const { value } = req.query;
  const response = {
    message: value,
  };
  res.status(200).json(response);
});

app.get("/three/:id", (req, res) => {
  const { id } = req.params;
  const response = {
    id: id,
  };
  res.status(200).json(response);
});

app.post("/four", (req, res) => {
  const { id } = req.body;
  const response = {
    id,
    message: "Not implemented",
  };
  res.status(501).json(response);
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
