import React from "react";
import emptyAlbumArt from "../assets/empty.jpg";

interface AlbumProps {
  albumArt: string;
  title: string;
  artist: string;
}

const Album: React.FC<AlbumProps> = ({ albumArt, title, artist }) => {
  return (
    <div className="album">
      <img
        src={albumArt || emptyAlbumArt}
        alt={`${title} album cover`}
        width="128"
        height="128"
      />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
};

export default Album;
