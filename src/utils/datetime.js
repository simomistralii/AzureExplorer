import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className=' my-auto' title={date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}>{date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</div>
    )
}

export default DateTime