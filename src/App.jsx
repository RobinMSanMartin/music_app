import "./App.css";
import { PlayListHeader } from "./components/PlayListHeader/PlayListHeader";
import { SongList } from './components/SongList/SongList';

import { PlayButton } from './components/Buttons/PlayButton';
import { FollowButton } from './components/Buttons/FollowButton';
import { ShuffleButton } from './components/Buttons/ShuffleButton';

const songs = [
  {
    image: 'https://i.scdn.co/image/ab67616d0000b273275c384b294918ae918dbee9',
    title: 'The Crying Game',
    artist: 'Boy George',
    duration: '3:23',
  },
  {
    image: 'https://i1.sndcdn.com/artworks-y6WaHzlvp7PbwkLT-JlZicw-t500x500.png',
    title: 'peekaboo (feat. azchike)',
    artist: 'Kendrick Lamar, AZ Chike',
    duration: '2:35',
  }
];

function App() {
  const handlePlay = () => console.log("Play playlist");
  const handleFollow = () => console.log("Follow playlist");
  const handleShuffle = () => console.log("Shuffle playlist");

  return (
    <div className="app-container">
      <header className="app-header">
        <PlayListHeader
          title="Mi Playlist Favorita"
          imageUrl="https://cdn-images.dzcdn.net/images/cover/61274796bc51a91139950cf5c71a5e6a/0x1900-000000-80-0-0.jpg"
        />
      </header>
      <main className="app-body">
        <div className="playlist-actions">
          <PlayButton onClick={handlePlay} />
          <FollowButton onClick={handleFollow} />
          <ShuffleButton onClick={handleShuffle} />
        </div>

        <SongList songs={songs} />
      </main>
    </div>
  );
}

export default App;
