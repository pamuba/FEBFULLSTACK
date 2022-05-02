import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function HooksContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <>
        <h2>Number Of Cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
    </>
  )
}

export default HooksContainer