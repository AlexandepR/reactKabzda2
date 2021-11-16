import React, {useEffect, useState} from "react";
import style from './ClockAnalog.module.css'

export const ClockAnalogMy = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const deg = 6;
        const hr = document.querySelector('#hr');
        const sc = document.querySelector('#sc');

        setInterval(() => {
            setDate(new Date())
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * deg;
            const ss = date.getSeconds() * deg;
        }, 1000)
    }, [])

    // const sc = document.querySelector('#sc');
    // const sc = transform: `rotateZ(${ss...}deg)`;
        const day = new Date()
        const sc = {
        transform: `rotateZ(${day.getSeconds()}6)`
        };
    return (
        <div>
        {/*// <div className={style.body}>*/}
            {/*<div className={style.clock}>*/}
            {/*    <div className={style.sec}>*/}
            {/*        <div className={style.sc} style={sc}>*/}

            {/*            sec*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        {/*</div>*/}
        </div>
    )
}






// const sc = document.querySelector('#sc');
// sc.style.transform = `rotateZ(${ss}deg)`;

// const deg = 6;
// const hr = document.querySelector('#hr');
//
//
//
//     hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
//     mn.style.transform = `rotateZ(${mm}deg)`;
//
// })