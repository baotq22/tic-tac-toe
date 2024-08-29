import React from 'react'

export const Reset = ({ status, clickAction }) => {
  return (
    <>
      <button id="restart" onClick={clickAction}>Restart</button>
    </>
  )
}