import './PlayCount.css';

const formatCount = (count) => {
  if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + 'M';
  if (count >= 1_000) return (count / 1_000).toFixed(1) + 'K';
  return count.toString();
};

export const PlayCount = ({ count = 0 }) => {
  return (
    <div className="play-count-container">
      <span className="play-count-number">{formatCount(count)}</span>
      <span className="play-count-label">monthly listeners</span>
    </div>
  );
};
