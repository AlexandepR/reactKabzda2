import {ClockViewPropsType} from "./ClockAnalog";
import React from "react";

const get2DidgitsString = (num: number) => num < 10 ? '0' + num : num

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (<>
            <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} />
                <div className={"dial minutes"} />
                <div className={"dial hours"} />
            </div>
            <div className={"digital-clock"}>
            </div>
        </div>
        </>
    )
}