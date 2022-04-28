import React, {useState} from 'react'

function HooksCounterFour() {
  const [items, setItems] = useState([])
  const addItem = () => {
    console.log(items)
    setItems([...items, {
        id:items.length,
        value:Math.floor(Math.random()*10) + 1
    }])
  }
  return (
    <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HooksCounterFour