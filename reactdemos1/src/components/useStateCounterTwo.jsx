import React, {useState} from 'react'

function useStateCounterTwo() {
  const initialCount = 0
  const[count,setCount] = useState(initialCount)

  const incrementFive = () => {
    for(let i=0;i<5;i++){
      setCount(prevState => prevState + 1)
    }
  }
  return (
    <>
        Count: {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count + 1)}>Incremet</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </>
  )
}

export default useStateCounterTwo