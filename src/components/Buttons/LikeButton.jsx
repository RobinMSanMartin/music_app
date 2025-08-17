import { FaHeart } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const LikeButton = ({ onClick }) => (
  <BaseButton icon={<FaHeart />} variant="icon-only" onClick={onClick} />
);
