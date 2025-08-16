import './PlayListTitle.css';

export const PlayListTitle = ({ title }) => {
  return (
    <div className="playlist-title-container">
      <h1 className="playlist-title">{title}</h1>
    </div>
  );
};
