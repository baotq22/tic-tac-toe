import React from 'react'

export const Tiles = ({value, onClick, playerTurn}) => {
  let hover = null;
  if (value == null && playerTurn != null) {
    hover = `hover-${playerTurn.toLowerCase()}`;
  }
  return (
    <div onClick={onClick} className={`button-option ${hover}`}>{value}</div>
  )
}