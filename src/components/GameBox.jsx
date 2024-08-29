import React from 'react'
import { Tiles } from './Tiles'
import Cross from './Cross'

export const GameBox = ({ tiles, clickAction, playerTurn, crossEnable }) => {
  return (
    <div className="container">
      <Tiles value={tiles[0]} clickAction="" onClick={() => clickAction(0)} playerTurn={playerTurn} />
      <Tiles value={tiles[1]} clickAction="" onClick={() => clickAction(1)} playerTurn={playerTurn} />
      <Tiles value={tiles[2]} clickAction="" onClick={() => clickAction(2)} playerTurn={playerTurn} />
      <Tiles value={tiles[3]} clickAction="" onClick={() => clickAction(3)} playerTurn={playerTurn} />
      <Tiles value={tiles[4]} clickAction="" onClick={() => clickAction(4)} playerTurn={playerTurn} />
      <Tiles value={tiles[5]} clickAction="" onClick={() => clickAction(5)} playerTurn={playerTurn} />
      <Tiles value={tiles[6]} clickAction="" onClick={() => clickAction(6)} playerTurn={playerTurn} />
      <Tiles value={tiles[7]} clickAction="" onClick={() => clickAction(7)} playerTurn={playerTurn} />
      <Tiles value={tiles[8]} clickAction="" onClick={() => clickAction(8)} playerTurn={playerTurn} />
      <Cross crossEnable={crossEnable}/>
    </div>
  )
}