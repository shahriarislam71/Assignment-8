import React, { useEffect, useState } from 'react';

const ReadingTime = (props) => {
    // console.log(props.time)
    const {time} = props
    const [totalTime, setTime] = useState(time)
    useEffect(()=>{
        const getTime = localStorage.getItem('Time')
        setTime(getTime)
    },[time])
    return (
        <div>
            <h1 className='text-center p-3 text-blue-700 bg-indigo-100 border border-purple-500 rounded mb-5'>Spent time on read : {totalTime} min</h1>
        </div>
    );
};

export default ReadingTime;