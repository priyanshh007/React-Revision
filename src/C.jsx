import React from 'react'
import { Data } from './App'
import { useContext } from 'react'

function C() {
    const name= useContext(Data)
  return (
    <div>C--Welcome!! {name}</div>
  )
}

export default C