import React, { useEffect } from 'react'
import { useState } from 'react'
import { GameBox } from './components/GameBox'
import { GameOver } from './components/GameOver';
import statusGame from './components/Status';
import { Reset } from './components/Reset';

const human = "X";
const enemy = "O";

const winnerCondition = [
  { combo: [0, 1, 2], crossEnable: "strike-row-1" },
  { combo: [3, 4, 5], crossEnable: "strike-row-2" },
  { combo: [6, 7, 8], crossEnable: "strike-row-3" },
  { combo: [0, 3, 6], crossEnable: "strike-column-1" },
  { combo: [1, 4, 7], crossEnable: "strike-column-2" },
  { combo: [2, 5, 8], crossEnable: "strike-column-3" },
  { combo: [0, 4, 8], crossEnable: "strike-diagonal-1" },
  { combo: [2, 4, 6], crossEnable: "strike-diagonal-1" },
]

function App() {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(human)
  const [crossEnable, setCrossEnable] = useState();
  const [status, setStatus] = useState(statusGame.during)

  const clickTurn = (index) => {
    if (status !== statusGame.during) {
      alert("Game Over!")
      return;
    }
    //prevent to re-click tiles which is clicked
    if (tiles[index] !== null) {
      return;
    }

    const newTurn = [...tiles];
    newTurn[index] = turn;
    setTiles(newTurn);
    if (turn === human) {
      setTurn(enemy);
    } else {
      setTurn(human);
    }
  }

  const whoIsWinner = (tiles, setCrossEnable) => {
    for (const { combo, crossEnable } of winnerCondition) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];

      if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
        setCrossEnable(crossEnable);
        if (tileValue1 === human) {
          setStatus(statusGame.humanWins)
        } else {
          setStatus(statusGame.enemyWins)
        }
      }
    }

    const filledAllTiles = tiles.every((tile) => tile !== null);
    if (filledAllTiles) {
      setStatus(statusGame.draw)
    }
  }

  useEffect(() => {
    whoIsWinner(tiles, setCrossEnable);
  }, [tiles]);

  const resetGame = () => {
    setStatus(statusGame.during);
    setTiles(Array(9).fill(null));
    setTurn(human);
    setCrossEnable(null);
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="title">Tic-tac-toe</h1>
        <GameBox playerTurn={turn} tiles={tiles} clickAction={clickTurn} crossEnable={crossEnable} />
        <Reset status={status} clickAction={resetGame}/>
        <GameOver status={status} />
      </div>
    </>
  )
}

export default App
