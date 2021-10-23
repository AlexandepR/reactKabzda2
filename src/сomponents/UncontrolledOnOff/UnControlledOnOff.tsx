import React, {useState} from "react";

type PropsType = {
    // on: boolean
    onChange: (on:boolean) => void
}

function UnControlledOnOf(props: PropsType) {

    let [on, setOn] = useState(false)


    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }



    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
                props.onChange(true)
            }}> On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UnControlledOnOf;