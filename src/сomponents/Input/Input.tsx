import React, {ChangeEvent, useRef, useState} from "react";

// type PropsType = {
//    title: 'imput'
// }
// function UnControlledInput(props: PropsType) {


export function ControlledInput() {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <>
            <input value={parentValue}
                   onChange={onChange}/>
        </>
    )
}


export function ControlledCheckbox() {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <>
            <input type='checkbox'
                   checked={parentValue}
                   onChange={onChange}/>
        </>
    )
}


export function ControlledSelect() {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
            </select>
        </>
    )
}


