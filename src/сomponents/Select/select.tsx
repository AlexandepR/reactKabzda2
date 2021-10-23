import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from "react";
import s from './select.module.css'


type itemContorlSelect = {
    title: string
    value: any
}

export type ControlSelectMyType = {
    value?: any
    onChange: (value: any) => void
    items: itemContorlSelect[]
}

export function WithValue(props: ControlSelectMyType) {
    let [active, setAction] = useState(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(it => it.value === props.value)
    const hoveredItem = props.items.find(it => it.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value);
    }, [ props.value])

    const toggleItems = () => {
        setAction(!active)
    }
    const itemClicked = (value: any) => {
        props.onChange(value)
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                const pretendentElement = e.key === 'ArrowDown'
                ? props.items[i + 1]
                    : props.items[i - 1]
                if (pretendentElement) {
                    props.onChange(pretendentElement.value)
                    return;
                }
            }
        }
        if (!selectedItem) {
            props.onChange(props.items[0].value)
        }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setAction(false)
        }
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main}
                      onKeyUp={onKeyUp}
                      tabIndex={0}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => {
                                props.onChange(i.value);
                                setAction(false)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}


export function WithoutValue(props: ControlSelectMyType) {
    return (
        <div>
            {props.items.map(it => <div key={it.value}>{it.title}</div>)}
        </div>
    )
}


//
// type itemContorlSelect = {
//     title: string
//     value: any
// }
//
// export type ControlSelectMyType = {
//     value?: any
//     onChange?: (value: any) => void
//     items: itemContorlSelect[]
// }
//
// export function ControlSelectMy(props: ControlSelectMyType) {
//     let [onOfListName, setoonOfListName] = useState(true)
//     let [onClickValue, setOnClickValue] = useState('')
// // const onClickChange = (value:string) => {
// //         return value
// // }
//
//     return (
//
//         <div>
//             <div
//                 onClick={() => {setoonOfListName(!onOfListName)}}>
//                 <b>SELECT MY Names</b>
//                 {}
//             </div>
//             {onOfListName === true && props.items.map((i, index) =>
//                 <div>
//                     <div key={index}
//                          onClick={() => setOnClickValue(i.value)}
//                     >{i.title}</div><div>{onClickValue === i.value && <b> Ti kliknyl {i.title}</b>}</div>
//                 </div>
//             )}
//         </div>
//
//     )
// }