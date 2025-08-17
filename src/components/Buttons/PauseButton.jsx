import { FaPause } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const PauseButton = ({ onClick }) => (
  <BaseButton icon={<FaPause />} label="Pause" onClick={onClick} />
);
