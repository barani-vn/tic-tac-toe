
import Square from "./square";

function Board({ squares, onPlay, disabled }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onPlay(index)}
          disabled={disabled || square !== null}
        />
      ))}
    </div>
  );
}

export default Board;
