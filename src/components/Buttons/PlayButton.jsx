import { FaPlay } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const PlayButton = ({ onClick }) => (
  <BaseButton icon={<FaPlay />} label="Play" onClick={onClick} />
);
