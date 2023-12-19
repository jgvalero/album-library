import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState("");
  const [albumArt, setAlbumArt] = useState("");
  const [dateListened, setDateListened] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/albums", {
        title,
        artist,
      });
      const newAlbum = response.data;
      console.log(`Added new album: ${newAlbum.title} by ${newAlbum.artist}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add a new album</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title<span style={{ color: "red" }}>*</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Artist<span style={{ color: "red" }}>*</span>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="100"
          />
        </label>

        <label>
          Album Art:
          <input
            type="text"
            value={albumArt}
            onChange={(e) => setAlbumArt(e.target.value)}
          />
        </label>

        <label>
          Date Listened:
          <input
            type="date"
            value={dateListened}
            onChange={(e) => setDateListened(e.target.value)}
          />
        </label>

        <button type="submit">Add Album</button>
      </form>
    </div>
  );
}

export default Add;
