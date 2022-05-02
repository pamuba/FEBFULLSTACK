import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
  return (
    <>
        <h2>Number Of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cakes</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
