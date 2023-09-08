import React, { useState } from 'react'

const Basic = () => {
    const [message, setMessage] = useState('Hey Guys Welcome to Devtown');
    
    return <h1>
        {message}
    </h1>
}
export default Basic