import { FaRandom } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const ShuffleButton = ({ onClick }) => (
  <BaseButton icon={<FaRandom />} label="Shuffle" onClick={onClick} />
);
