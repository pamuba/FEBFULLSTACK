import React, {useEffect, useState} from 'react'

function UseEfffectTwo() {
 const [x, setX] = useState(0)
 const [y, setY] = useState(0)
 

 const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
 }
 //componentDidMount
 useEffect(()=>{
     window.addEventListener('mousemove', logMousePosition)


     //compopnentWillUnmount
     return () => {
        console.log('Component unmounting code')
        window.removeEventListener('mousemove', logMousePosition)
     }
 }, []) 

  return (
    <div>
        X-{x} Y-{y}
    </div>
  )
}

export default UseEfffectTwo