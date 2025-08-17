import './Buttons.css';

export const BaseButton = ({ label, icon, onClick, variant = 'primary', size = 'md', disabled = false }) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick} disabled={disabled}>
      {icon && <span className="btn-icon">{icon}</span>}
      {label && <span className="btn-label">{label}</span>}
    </button>
  );
};
