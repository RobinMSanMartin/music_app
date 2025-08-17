import './SongList.css';
import { LikeButton } from '../Buttons/LikeButton';
import { OptionsButton } from '../Buttons/OptionsButton';

export const SongItem = ({ image, title, artist, duration }) => {
  return (
    <div className="song-item">
      <img src={image} alt={title} className="song-image" />
      <div className="song-details">
        <span className="song-title">{title}</span>
        <span className="song-artist">{artist}</span>
      </div>
      <span className="song-duration">{duration}</span>
      <div className="song-actions">
        <LikeButton onClick={() => console.log(`Liked ${title}`)} />
        <OptionsButton onClick={() => console.log(`Options for ${title}`)} />
      </div>
    </div>
  );
};
