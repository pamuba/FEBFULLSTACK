import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES } from '../gqloperations/queries'

function Home() {
    // useEffect(()=>{
    //     fetch('http://localhost:4000/',{
    //         method:"post",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             query:`
                
    //             query getAllUsers{
    //                 users{
    //                   _id
    //                   firstName
    //                   lastName
    //                   email
    //                 }
    //               }

    //             `
    //         })
    //     }).then(res=>res.json())
    //       .then(data=>console.log(data))
    // }, [])

  const {loading,error,data} = useQuery(GET_ALL_QUOTES)
  if(loading) return <h1>Loading</h1>
  if(error){
      console.log(error.message)
  }
  if(data.quotes.length == 0){
      return <h2>No Quotes Available</h2>
  }
  return (
    <div className='container'>
        {
            data.quotes.map(quote=>{
                return(
                    <blockquote>
                        <h6>{quote.name}</h6>
                        <p className='right-align'>~{quote.by.firstName}</p>
                    </blockquote>
                )
            })
        }
    </div>
  )
}

export default Home