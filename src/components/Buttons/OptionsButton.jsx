import { FaEllipsisH } from 'react-icons/fa';
import { BaseButton } from './BaseButton';

export const OptionsButton = ({ onClick }) => (
  <BaseButton icon={<FaEllipsisH />} variant="icon-only" onClick={onClick} />
);
