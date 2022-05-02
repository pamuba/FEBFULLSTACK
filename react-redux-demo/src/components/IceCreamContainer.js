import React from 'react'
import { buyIceCream } from '../redux'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
  return (
    <>
        <h2>Number Of IceCreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
