import React , {useEffect, useState} from 'react'
import axios from 'axios'

function UseEffectThree() {
  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  //componentDidMount
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
         .then(res=>{
             console.log(res)
             setPosts(res.data)
         })
         .catch()
  }, [idFromButtonClick])
  const handleClick = () => {
      setIdFromButtonClick(id)
  }
  return (
    <div>
        <h2>Posts</h2>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
        <button type="button" onClick={handleClick}>Fetch</button>
        <ul>
            {
                // posts.map(post=><li key={post.id}>{post.title}</li>)
                posts.title
            }
        </ul>
    </div>
  )
}

export default UseEffectThree