import React, {ChangeEvent, useRef, useState} from "react";



export function UncontrolledInput () {
    return (
        <div>Un
        <input/>
        </div>
    )
}
export function ControlledInput () {
    const[value, setValue] = useState('')
    return (
        <div>Contr
            <><input
            onChange={(e) =>{
               const actualValue =  e.currentTarget.value
                setValue(actualValue)
            }}
            /> {value}</>
        </div>
    )
}

export function GetControlledInput () {
    const[value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>ContrNew
            <><input ref={inputRef}/>
            <button
            onClick={(e) =>
            {
                const el = inputRef.current as HTMLInputElement
                setValue(el.value)}}
            >save</button> - actual value: {value} </>;
        </div>
    )
}


export function MyInputControlRef () {
    const [value, setValue] = useState('')
    const useInput = useRef<HTMLInputElement>(null)
    const IgetResult = () => {
        const New = useInput.current as HTMLInputElement
        setValue(New.value)
    }
    return (
        <>
            <input
            ref = {useInput}
            />
            <button onClick={IgetResult}>Addd</button>
            {value}
        </>
    )
}

export function MyInputControlCheck () {
    const [value, setValue] = useState(true)
    const useInput = useRef<HTMLInputElement>(null)
    const onChangeCheck = () => {
        const New = useInput.current as HTMLInputElement
        setValue(New.checked)
    }
    return (
        <>
            <input
                type='checkbox'
                ref = {useInput}
            />
            <button onClick={ onChangeCheck }>AdCheck</button>

            {value} Check
        </>
    )
}

export function ControlSelectMy () {
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

   const optionRef = useRef<HTMLSelectElement>(null)
    const changeSelect = () => {
        const newValue = optionRef.current as HTMLSelectElement
        setSelectValue(newValue.value)
    }
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
            setSelectValue(e.currentTarget.value)
    }
    return(
        <div>
            <select
                ref = {optionRef}
                value={selectValue}
                onChange={onChange}

            >
                <option>none</option>
                <option value={1}>Minsk</option>
                <option value={2}>Kiev</option>
                <option value={3}>Peter</option>
            </select>
            <button onClick={ changeSelect }>AddSelect</button>
            {selectValue}
        </div>

    )
}






// export function MyInputControlRef () {
//     const[value, setValue] = useState('')
//     // const changeInput =(e:ChangeEvent<HTMLInputElement>) => {
//     // e.currentTarget.value
//     // }
//     const inputRef2 = useRef<HTMLInputElement>(null)
//     const SeeMe = () => {
//     const el = inputRef2.current as HTMLInputElement
//         setValue(el.value)
//     }
//     return (
//         <>
//             <input
//             ref = {inputRef2}
//             />
//             <button onClick={SeeMe}>ADD</button>
//             {value}
//         </>
//     )
// }