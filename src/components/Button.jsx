
const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-violet-200 hover:bg-white px-1 py-1 rounded-lg text-violet ${
        disabled ? 'opacity-50' : ''
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

