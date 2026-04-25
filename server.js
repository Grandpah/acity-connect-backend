const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

app.get("/", (req, res) => {
  res.send("Backend connected to database 🚀");
});

app.post("/api/register", async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    if (!email.endsWith("@acity.edu.gh")) {
      return res.status(400).json({ message: "Use ACity email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (full_name, email, password) VALUES ($1,$2,$3) RETURNING *",
      [full_name, email, hashedPassword]
    );

    res.json(newUser.rows[0]);

  } catch (error) {
    res.status(500).json({
  message: "Registration failed",
  error: error.message
});
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.rows[0].password);

  if (!valid) {
    return res.status(400).json({ message: "Wrong password" });
  }

  const token = jwt.sign(
    { id: user.rows[0].id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

app.get("/api/listings", async (req, res) => {
  const listings = await pool.query("SELECT * FROM listings WHERE approved = true");
  res.json(listings.rows);
});

app.post("/api/listings", protect, async (req, res) => {
  const { title, description, category } = req.body;

  const listing = await pool.query(
    "INSERT INTO listings (user_id, title, description, category) VALUES ($1,$2,$3,$4) RETURNING *",
    [req.user.id, title, description, category]
  );

  res.json(listing.rows[0]);
});

app.post("/api/listings/:id/interested", protect, async (req, res) => {
  try {
    const { message } = req.body;

    const interest = await pool.query(
      `INSERT INTO interests
       (listing_id, user_id, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [req.params.id, req.user.id, message || "I am interested in this listing"]
    );

    res.status(201).json({
      message: "Interest request sent successfully",
      interest: interest.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not send interest request",
      error: error.message,
    });
  }
});
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});