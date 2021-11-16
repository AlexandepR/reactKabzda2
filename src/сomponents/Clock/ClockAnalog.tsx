import {useEffect, useState} from "react";

type PropsType = {
    mode?: 'digital' | 'analog'
}

const get2DidgitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view

    switch (props.mode) {
        case 'analog':
            view = <span>ANALOG</span>
            break;
        case 'digital':
        default:
            view = <>
                <span>{get2DidgitsString(date.getHours())}</span>
                :
                <span>{get2DidgitsString(date.getMinutes())}</span>
                :
                <span>{get2DidgitsString(date.getSeconds())}</span>
            </>
    }
    return(
        <div>
            {view}
        </div>
    )
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (<>
        <span>{get2DidgitsString(date.getHours())}</span>
        :
        <span>{get2DidgitsString(date.getMinutes())}</span>
        :
        <span>{get2DidgitsString(date.getSeconds())}</span>
    </>)
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (<>

        </>
    )
}