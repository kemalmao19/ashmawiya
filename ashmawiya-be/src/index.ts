import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = 5000;

app.listen(port, () => {
  console.log("server running on localhost:" + port);
});
