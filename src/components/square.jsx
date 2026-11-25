
function Square({ value, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-24 h-24 sm:w-28 sm:h-28
        rounded-2xl border border-slate-700/70
        bg-slate-800 text-5xl sm:text-7xl font-bold
        flex items-center justify-center
        transition-all duration-200
        hover:bg-slate-700 hover:scale-105
        disabled:cursor-not-allowed
        ${value === "X" ? "text-cyan-400" : "text-pink-400"}
      `}
    >
      {value}
    </button>
  );
}

export default Square;
