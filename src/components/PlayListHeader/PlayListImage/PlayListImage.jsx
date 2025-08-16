import './PlayListImage.css';

export const PlayListImage = ({ imageUrl }) => {
  return (
    <div className="playlist-image-container">
      <img src={imageUrl} alt="Playlist Cover" className="playlist-image" />
    </div>
  );
};
