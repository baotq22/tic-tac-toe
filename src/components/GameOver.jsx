import React from 'react'
import statusGame from './Status'

export const GameOver = ({ status }) => {
  switch (status) {
    case statusGame.during:
      return (
        <></>
      )
    case statusGame.humanWins:
      return (
        <div className="popup">
          <p id="message">Human Wins</p>
        </div>
      )
    case statusGame.enemyWins:
      return (
        <div className="popup">
          <p id="message">Enemy Wins</p>
        </div>
      )
    case statusGame.draw:
      return (
        <div className="popup">
          <p id="message">Draw</p>
        </div>
      )
  }
}