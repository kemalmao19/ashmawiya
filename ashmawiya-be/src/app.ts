import express from "express";
import "./config/loadEnv";
import usersRouter from "./routes/users";
import coursesRouter from "./routes/courses";
import cors from "cors";
// import Cookies from 'js-cookie'

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// USERS ENDPOINTS
app.use("/api/users", usersRouter);

// COURSES ENDPOINTS
app.use("/api/courses", coursesRouter);


app.listen(port, () => {
  console.log("server running on localhost:" + port);
});

export default app;
