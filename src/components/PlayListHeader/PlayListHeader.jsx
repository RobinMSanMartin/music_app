import './PlayListHeader.css';
import { PlayListImage } from './PlayListImage/PlayListImage';
import { PlayListTitle } from './PlayListTitle/PlayListTitle';

export const PlayListHeader = ({ title, imageUrl }) => {
  return (
    <div className="playlist-header-container">
      <div className="playlist-image-wrapper">
        <PlayListImage imageUrl={imageUrl} />
        {/* Título solo visible dentro de imagen en mobile */}
        <div className="mobile-title">
          <PlayListTitle title={title} />
        </div>
      </div>
      {/* Título visible al lado en desktop */}
      <div className="desktop-title">
        <PlayListTitle title={title} />
      </div>
    </div>
  );
};