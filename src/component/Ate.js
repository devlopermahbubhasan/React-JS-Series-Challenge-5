import React, { useState } from 'react';
import './Ate.css'
const Ate = () => {
    let newTime = new Date().toLocaleTimeString();
    const [tlc , setTlc] = useState(newTime);
    const time = () =>{
        let Time = new Date().toLocaleTimeString();
        setTlc (Time);
    }
    return (
        <div className='body'>
            <h1>{tlc}</h1>
            <button className='btn' onClick={time}>Get Time</button>
        </div>
    );
};

export default Ate;