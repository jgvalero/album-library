import React from "react";

interface AlbumProps {
  albumArt: string;
  title: string;
  artist: string;
}

const Album: React.FC<AlbumProps> = ({ albumArt, title, artist }) => {
  return (
    <div className="album">
      <img src={albumArt} alt={`${title} album cover`} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
};

export default Album;
