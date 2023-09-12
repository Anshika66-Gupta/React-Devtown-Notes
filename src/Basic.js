import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [message, setMessage] = useState('Hey Guys Welcome to Devtown');
    useEffect(() => {
        console.log('Triggering the useEffect')
        
        setTimeout(() => {
            setMessage("Okay, Everything is fine!!")
        }, 2000)
    })
    
    return <h1>
        {message}
    </h1>
}
export default Basic