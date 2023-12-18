import Album from "./components/Album";
import sampleAlbums from "./sampleAlbums.json";

function Home() {
  console.log(sampleAlbums);
  return (
    <div>
      <h1>Album Library</h1>
      {sampleAlbums.map((album) => (
        <Album
          key={album.id}
          albumArt={album.albumArt}
          title={album.title}
          artist={album.artist}
        />
      ))}
    </div>
  );
}

export default Home;
