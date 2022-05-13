import React, {useEffect} from 'react'

function Home() {
    useEffect(()=>{
        fetch('http://localhost:4000/',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                query:`
                
                query getAllUsers{
                    users{
                      _id
                      firstName
                      lastName
                      email
                    }
                  }

                `
            })
        }).then(res=>res.json())
          .then(data=>console.log(data))
    }, [])
  return (
    <div className='container'>
         <blockquote>
            <h6>This the quote</h6>
            <p className='right-align'>~partha</p>
        </blockquote>
        <blockquote>
            <h6>This the quote</h6>
            <p className='right-align'>~partha</p>
        </blockquote>
    </div>
  )
}

export default Home