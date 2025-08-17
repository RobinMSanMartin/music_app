import './SongList.css';
import { SongItem } from './SongItem'

export const SongList = ({ songs }) => {
  return (
    <div className="song-list-container">
      {songs.map((song, index) => (
        <SongItem
          key={index}
          image={song.image}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
};
