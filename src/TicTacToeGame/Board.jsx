import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [1, 4, 8],
      [2, 4, 6],
    ];
    for (const logic of winnerLogic) {
      let [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] === null && !isWinner) {
      const copyState = [...state];
      copyState[index] = isXturn ? "x" : "o";
      setState(copyState);
      setisXturn(!isXturn);
    }
  };

  const handleplayagain = () => {
    setState(Array(9).fill(null));
    setisXturn(true);
  };

  return (
    <div className="board-wrapper">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="boardContainer">
        {isWinner ? (
          <div className="winner-message">
            <p><strong>{isWinner.toUpperCase()}</strong> won the game!</p>
            <button className="play-again-btn" onClick={handleplayagain}>
              Play Again
            </button>
          </div>
        ) : (
          <>
            <h4 className="turn-indicator">
              Please <span>{isXturn ? "X" : "O"}</span> make a move
            </h4>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
