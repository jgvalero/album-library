import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import emptyAlbumArt from "./assets/empty.jpg";
import "./AlbumDetails.css";

interface Album {
  id: number;
  title: string;
  artist: string;
  rating?: number;
  release_date?: string;
  album_art?: string;
  date_listened?: string;
}

function AlbumDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/albums/${id}`)
      .then((response) => setAlbum(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const deleteAlbum = () => {
    axios
      .delete(`http://localhost:3000/albums/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {album.album_art ? (
        <img
          src={album.album_art}
          alt={`${album.title} album cover`}
          width="256"
          height="256"
        />
      ) : (
        <img
          src={emptyAlbumArt}
          alt="Fallback album cover"
          width="256"
          height="256"
        />
      )}
      <h1>{album.title}</h1>
      <h2>by {album.artist}</h2>
      {album.rating && <p>Rating: {album.rating}</p>}
      {album.release_date && <p>Release Date: {album.release_date}</p>}
      {album.album_art && (
        <img src={album.album_art} alt={`${album.title} album cover`} />
      )}
      {album.date_listened && <p>Date Listened: {album.date_listened}</p>}
      <button onClick={deleteAlbum}>Delete Album</button>
    </div>
  );
}

export default AlbumDetails;
