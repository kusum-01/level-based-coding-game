const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");
const Question = require("./models/Question");

const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

//  CORS (for development)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//  MongoDB connection
mongoose
  .connect("mongodb+srv://kusum:wycjoZ-ruwvut-3ryhva@cluster0.cwa4uqm.mongodb.net/levelGameDB?appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

//  Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// API Routes
app.use("/api", userRoutes);

// ---------------------
// AUTH ROUTES
// ---------------------
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required." });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists." });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ message: "Signup successful!", name });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  res.json({ message: "Login successful", name: user.name });
});

// ---------------------
//  QUESTIONS API
// ---------------------
app.get("/api/questions", async (req, res) => {
  try {
    const { topic, level } = req.query;
    const topicLower = topic?.toLowerCase();
    const levelNum = parseInt(level);

    const questions = await Question.find({
      topic: { $regex: new RegExp("^" + topicLower + "$", "i") },
      level: levelNum,
    });

    if (!questions.length)
      return res
        .status(404)
        .json({ message: `No questions found for ${topicLower} - Level ${levelNum}` });

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------------
// FRONTEND ROUTES
// ---------------------
app.get("/", (req, res) => res.render("index"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/main", (req, res) => res.render("main"));
app.get("/game1", (req, res) => res.render("game1"));
app.get("/login", (req, res) => res.render("login"));
app.get('/game3', (req, res) => res.render('game3'));



// ---------------------
//  Start server
// ---------------------
const PORT = 3000;
app.listen(PORT, () =>
  console.log(` Server running at: http://localhost:${PORT}`)
);
