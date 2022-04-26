import React from 'react'
function Greet(props){
    return <>
                <h3>Hello {props.name} aka {props.heroName}</h3>
                <h3>{props.children}</h3>
            </>
    // return React.createElement('div', {id:"useername"}, React.createElement('h1',null,'Hello World'))
}

// const Greet = () => <h1>Hello World</h1>

export default Greet