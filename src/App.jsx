import "./App.css";
import { PlayListHeader } from "./components/PlayListHeader/PlayListHeader";
import { PlayButton } from "./components/Buttons/PlayButton";
import { ShuffleButton } from "./components/Buttons/ShuffleButton";

function App() {
  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <PlayListHeader
            title="Mi Playlist Favorita"
            imageUrl="https://cdn-images.dzcdn.net/images/cover/61274796bc51a91139950cf5c71a5e6a/0x1900-000000-80-0-0.jpg"
          />
        </header>
        <main className="app-body">
          {/* Aquí irán las canciones, controles, etc. */}
          <PlayButton/>
          <br></br>
          <ShuffleButton/>
        </main>
      </div>
    </>
  );
}

export default App;
