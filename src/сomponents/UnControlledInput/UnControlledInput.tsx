import React, {ChangeEvent, useRef, useState} from "react";

// type PropsType = {
//    title: 'imput'
// }
// function UnControlledInput(props: PropsType) {
function UnControlledInput() {
    let [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={onChange}/>
            {value}
        </>
    )
}

export function GetValueOfIncontrolledInputByButtonPress() {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={save}>save
            </button>
            - actual value: {value}
        </>
    )
}

export default UnControlledInput;
