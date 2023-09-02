import React from 'react'
const Wishes = (props) => 
{
    console.log(props)
    return (
        
        <div>
        <h1>Hello {props.name} loves to play {props.hobby}</h1>
            {props.children}
            </div>
    )
    }
export default Wishes

//import React from 'react'

//function Wishes() {
//  return (
//    <div>Wishes</div>
//  )
//}

//export default Wishes