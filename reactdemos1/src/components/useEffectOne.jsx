import React, {useEffect, useState} from 'react'

function UseEffectOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  //componentDidMount
  //componentDidUpdate
  //compopnentWillUnmount

  // all time - componentDidUpdate
  //[count]: when  count changes - conditional componentDidUpdate
  //[]: only once on redner - componentDidMount
  useEffect(()=>{
      console.log('Useeffect-updating document title')
      document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectOne