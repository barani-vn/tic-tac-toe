
import { useState } from "react";
import Board from "./components/board";
import ScoreBoard from "./components/scoreboard";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [scores, setScores] = useState({
    X: 0,
    O: 0,
  });

  const [isDraw, setIsDraw] = useState(false);

  const winner = calculateWinner(squares);
  const gameOver = winner || isDraw;

  function handleClick(index) {
    if (squares[index] || gameOver) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = currentPlayer;

    setSquares(updatedSquares);

    const gameWinner = calculateWinner(updatedSquares);

    if (gameWinner) {
      setScores((prev) => ({
        ...prev,
        [gameWinner]: prev[gameWinner] + 1,
      }));
    } else if (updatedSquares.every((square) => square !== null)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsDraw(false);
  }

  function resetGame() {
    restartGame();
    setScores({ X: 0, O: 0 });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-5 py-16 sm:py-20">

      <main className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Header */}
        <header className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-semibold mb-5">
            Two Player Challenge
          </p>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight">
            TIC <span className="text-cyan-400">TAC</span> TOE
          </h1>

          <p className="text-slate-400 mt-5 text-base sm:text-lg">
            Think smart. Make your move. Claim victory.
          </p>
        </header>

        {/* Scoreboard */}
        <section className="w-full max-w-xl mb-12">
          <ScoreBoard
            scores={scores}
            currentPlayer={currentPlayer}
          />
        </section>

        {/* Game Status */}
        <section className="mb-8 text-center min-h-12 flex items-center">
          {winner ? (
            <p className="text-green-400 text-xl font-bold">
              🎉 Player {winner} Wins!
            </p>
          ) : isDraw ? (
            <p className="text-yellow-400 text-xl font-bold">
              It's a Draw!
            </p>
          ) : (
            <p className="text-slate-300 text-lg">
              Player's Turn:
              <span className={`ml-3 font-extrabold ${
                currentPlayer === "X"
                  ? "text-cyan-400"
                  : "text-pink-400"
              }`}>
                {currentPlayer}
              </span>
            </p>
          )}
        </section>

        {/* Game Board */}
        <section className="bg-slate-900/80 p-6 sm:p-9 rounded-[2rem] border border-slate-700/60 shadow-2xl shadow-black/40">
          <Board
            squares={squares}
            onPlay={handleClick}
            disabled={Boolean(gameOver)}
          />
        </section>

        {/* Controls */}
        <section className="flex flex-col sm:flex-row gap-5 mt-12 w-full max-w-md">

          <button
            onClick={restartGame}
            className="flex-1 py-4 px-7 rounded-xl bg-cyan-500 text-slate-950 font-bold text-base hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-cyan-500/10"
          >
            ↻ Restart Game
          </button>

          <button
            onClick={resetGame}
            className="flex-1 py-4 px-7 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-base hover:bg-slate-700 hover:-translate-y-1 transition-all duration-200"
          >
            Reset Scores
          </button>

        </section>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto mb-5"></div>

          <p className="text-slate-500 text-sm tracking-wide">
            Made with React & Tailwind CSS
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;
