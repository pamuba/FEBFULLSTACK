import React from 'react'

function Profile() {
  return (
    <div className='container my-container'>
        <div>
            <img className='circle' style={{border:"2px solid", marginTop:"10px"}} src="https://robohash.org/partha.png?size=200x200" alt="pic"/>
            <h5>Partha Bora</h5>
            <h5>Email - pp@pp.com</h5>
        </div>
        <blockquote>
            <h6>This the quote</h6>
            <p className='right-align'>partha</p>
        </blockquote>
        <blockquote>
            <h6>This the quote</h6>
            <p className='right-align'>partha</p>
        </blockquote>
    </div>
  )
}

export default Profile