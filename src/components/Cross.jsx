import React from 'react'

function Cross({crossEnable}) {
  return (
    <div className={`strike ${crossEnable}`}></div>
  )
}

export default Cross