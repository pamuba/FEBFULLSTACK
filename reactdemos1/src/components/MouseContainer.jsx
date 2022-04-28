import React, {useState} from 'react'
import UseEfffectTwo from './UseEfffectTwo'

function MouseContainer() {
  const [display, setDisplay] = useState(true)  
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {
            display && <UseEfffectTwo />
        }
    </div>
  )
}

export default MouseContainer