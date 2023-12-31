import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { Pool } = pg;

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database", err));

app.get("/albums", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM albums");
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get("/albums/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM albums WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (err) {
    next(err);
  }
});

app.post("/albums", async (req, res, next) => {
  const { title, artist } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO albums (title, artist) VALUES ($1, $2) RETURNING *",
      [title, artist]
    );
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put("/albums/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, artist } = req.body;
  try {
    const result = await pool.query(
      "UPDATE albums SET title = $1, artist = $2 WHERE id = $3 RETURNING *",
      [title, artist, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (err) {
    next(err);
  }
});

app.delete("/albums/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM albums WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "An error occurred" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
