import React from "react";
import { Link } from "react-router-dom";
import emptyAlbumArt from "../assets/empty.jpg";
import "./Album.css";

interface AlbumProps {
  albumArt: string;
  title: string;
  artist: string;
  id: number;
}

const Album: React.FC<AlbumProps> = ({ albumArt, title, artist, id }) => {
  return (
    <Link to={`/album/${id}`} className="album">
      <div>
        <img
          src={albumArt || emptyAlbumArt}
          alt={`${title} album cover`}
          width="128"
          height="128"
        />
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
    </Link>
  );
};

export default Album;
