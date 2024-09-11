import "./config/loadEnv";
import express from "express";
import usersRouter from "./routes/users";
import coursesRouter from "./routes/courses";
// import cors from "cors";
// import Cookies from 'js-cookie'

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(cors());

// USERS API \\
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// users router
app.use("/api/users", usersRouter);

// get all courses
app.use("/api/courses", coursesRouter);


app.listen(port, () => {
  console.log("server running on localhost:" + port);
});

export default app;
