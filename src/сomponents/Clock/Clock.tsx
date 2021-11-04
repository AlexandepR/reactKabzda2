import {useEffect, useState} from "react";

const get2DidgitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect( () => {
       const intervalId =  setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        },1000)

    return () => {
        clearInterval(intervalId)
    }
    },[])

    return <div>
        <span>{get2DidgitsString(date.getHours())}</span>
        :
        <span>{get2DidgitsString(date.getMinutes())}</span>
        :
        <span>{get2DidgitsString (date.getSeconds())}</span>
    </div>
}