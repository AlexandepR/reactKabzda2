import React from "react";
import {ClockViewPropsType} from "./ClockAnalog";

const get2DidgitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (<>
        <span>{get2DidgitsString(date.getHours())}</span>
        :
        <span>{get2DidgitsString(date.getMinutes())}</span>
        :
        <span>{get2DidgitsString(date.getSeconds())}</span>
    </>)
}
