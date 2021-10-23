import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType []
    onClick: (value: any) => void
}






function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
    <AccordionTitle
        title={props.titleValue}
        onChange={props.onChange}
        collapsed={props.collapsed}/>
        {/*{ props.collapsed === false && <AccordionBody /> }*/}
        { props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.onChange(!props.collapsed)}}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemType []
    onClick: (value: any) => void
}


function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {
                props.items.map((it,index) => <li onClick={() => {props.onClick(it.value)}} key={index}>{it.title}</li>)
            }
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;