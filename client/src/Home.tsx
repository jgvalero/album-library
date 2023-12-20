import { useEffect, useState } from "react";
import Album from "./components/Album";
import axios from "axios";
import "./Home.css";

interface Album {
  id: number;
  albumArt: string;
  title: string;
  artist: string;
}

function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/albums")
      .then((response) => setAlbums(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Album Library</h1>
      <a href="/add">Add Album</a>
      <div className="albums">
        {albums.map((album) => (
          <Album
            key={album.id}
            albumArt={album.albumArt}
            title={album.title}
            artist={album.artist}
            id={album.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
