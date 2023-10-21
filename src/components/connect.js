
const ConnectWalletButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-violet-200 justify-end hover:bg-white px-1 py-1 rounded-lg text-violet ${
        disabled ? 'opacity-50' : ''
      }`}
      disabled={disabled}
    >
    <p className="text-xl ">Connect wallet</p>
    </button>
    
  );
};
export default ConnectWalletButton;

  