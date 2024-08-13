import React from 'react'
import { useNavigate } from 'react-router-dom';

function SpecialCard({ data }) {
    const navigate = useNavigate();

    const handleClick = (e) => { 
        e.preventDefault(); // Prevent default button action
        navigate('/event/' + data.id); 
    }
    return (
        <div className='p-4 max-w-[200px]'>
            <div className='h-40 w-full bg-gray-300 m-2'>
            </div>
            <div>{data.date}</div>
            <h1>{data.title}</h1>
            <div className='truncate'>{data.description}</div>
            <button onClick={handleClick}>open</button>
        </div>
    )
}

export default SpecialCard