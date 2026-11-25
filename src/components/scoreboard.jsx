
function ScoreBoard({ scores, currentPlayer }) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-xl mx-auto">

      <div className={`p-6 rounded-2xl border text-center transition-all duration-300
        ${currentPlayer === "X"
          ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
          : "border-white/10 bg-slate-800"
        }`}
      >
        <p className="text-cyan-400 text-3xl font-bold">X</p>
        <p className="text-slate-400 text-base mt-2">Player X</p>
        <p className="text-white text-4xl font-bold mt-2">
          {scores.X}
        </p>
      </div>

      <div className={`p-6 rounded-2xl border text-center transition-all duration-300
        ${currentPlayer === "O"
          ? "border-pink-400 bg-pink-400/10 shadow-lg shadow-pink-500/10"
          : "border-white/10 bg-slate-800"
        }`}
      >
        <p className="text-pink-400 text-3xl font-bold">O</p>
        <p className="text-slate-400 text-base mt-2">Player O</p>
        <p className="text-white text-4xl font-bold mt-2">
          {scores.O}
        </p>
      </div>

    </div>
  );
}

export default ScoreBoard;
