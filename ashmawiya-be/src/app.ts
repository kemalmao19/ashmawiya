import express from "express";
import "./config/loadEnv";
import usersRouter from "./routes/users";
import coursesRouter from "./routes/courses";
import usersCourseRouter from "./routes/usersCourse";
import cors from "cors";
import notesRouter from "./routes/notes";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

app.get("/", (_, res) => {
  res.send("Server is running...");
});

// USERS ENDPOINTS
app.use("/api/users", usersRouter);

// COURSES ENDPOINTS
app.use("/api/courses", coursesRouter);

// USERS COURSES ENDPOINTS
app.use("/api/usercourse", usersCourseRouter);

// Notes Endpoints
app.use("/api/notes", notesRouter);

app.listen(port, () => {
  console.log("server running on localhost:" + port);
});

export default app;
