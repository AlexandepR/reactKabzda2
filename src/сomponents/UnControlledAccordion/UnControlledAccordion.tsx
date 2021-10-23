import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}





function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


    return <div>
        {/*<AccordionTitle title={props.titleValue} puk={() => {setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} puk={() => {dispatch({type: "TOGGLE-COLLAPSED"})}}/>


        { !state && <AccordionBody /> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
    puk: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.puk()} }>{props.title}</h3>
    )
}


function AccordionBody( ) {
    return (
        <ul>===========================
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}


export default UncontrolledAccordion;