import { FaArrowLeft } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const BackButton = ({ onClick }) => (
  <BaseButton icon={<FaArrowLeft />} variant="icon-only" onClick={onClick} />
);
