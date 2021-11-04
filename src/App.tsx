import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./сomponents/Rating/Rating";
import {UncontrolledRating} from "./сomponents/UnControlledRating/UnControlledRating";
import Accordion from "./сomponents/accordion/Accordion";
import UnControlledOnOff from "./сomponents/UncontrolledOnOff/UnControlledOnOff";
import OnOff from "./сomponents/OnOff/OnOff";
import UnControlledInput from "./сomponents/UnControlledInput/UnControlledInput";
import {GetValueOfIncontrolledInputByButtonPress} from './сomponents/UnControlledInput/UnControlledInput';
import {ControlledCheckbox, ControlledSelect} from "./сomponents/Input/Input";
import {
    UncontrolledInput,
    ControlledInput,
    GetControlledInput,
    MyInputControlRef, MyInputControlCheck,
} from "./stories/input";
import {WithValue} from './сomponents/Select/select'
import {WithoutValue} from './сomponents/Select/select'
import UncontrolledAccordion from './сomponents/UnControlledAccordion/UnControlledAccordion';
import {HelpsToReactMemo, LikeUseCallback} from "./stories/UseMemo";
import {ExampleUseState} from "./stories/UseState";
import {SimpleExample} from "./stories/UseEffect";
import {Clock} from "./сomponents/Clock/Clock";
import {ClockAnalog} from "./сomponents/Clock/ClockAnalog";


const App = (props: any) => {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, SetAccordionCollapsed] = useState<boolean>(false)
    let [SwitchOn, setSwitchOn] = useState(false)
    const OnClickCallBack = (value:any) => {alert(value)}
    // const selectClickCalBack =(value:)
    const [valueSelect, setValueSelect] = useState('2')


    return (
        <div>
            <WithValue
                value={valueSelect}
                onChange={(value) => (setValueSelect(value))}
            items={[
                {title: 'Alex', value: '1'},
                {title: 'Paha', value: '2'},
                {title: 'Mikl', value: '3'},
                {title: 'Aleksei', value: '4'}
            ]}
            />
            <br></br>
            <WithoutValue
                onChange={() => (alert("I'm here"))}
                items={[
                    {title: 'Alex', value: '1'},
                    {title: 'Paha', value: '2'},
                    {title: 'Mikl', value: '3'},
                    {title: 'Aleksei', value: '4'}
                ]}
            />
            {/*<MyInputControlCheck />*/}
            {/*<MyInputControlRef />*/}
            {/*<GetControlledInput/>*/}
            {/*<UncontrolledInput/>*/}
            {/*<ControlledInput />*/}
            {/*<ControlledCheckbox />*/}
            {/*<ControlledSelect />*/}
            {/*<GetValueOfIncontrolledInputByButtonPress />*/}
            {/*<UnControlledInput />*/}
            {/*<Accordion titleValue={'menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={SetAccordionCollapsed}*/}
            {/*           items={[]}*/}
            {/*            onClick={OnClickCallBack}*/}
            {/*/>*/}
            {/*<Accordion titleValue={'Users'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={SetAccordionCollapsed}*/}
            {/*           items={[{title:'Dimych', value: 1}, {title:'Valera',value: 2}, {title:'Alex',value: 3}]}*/}
            {/*           onClick={OnClickCallBack}*/}
            {/*/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<OnOff on={SwitchOn} onChange={setSwitchOn}/>*/}
            {/*<UnControlledOnOff onChange={setSwitchOn}/> {SwitchOn.toString()}*/}
            {/*<HelpsToReactMemo />*/}
            {/*<LikeUseCallback />*/}
            {/*<ExampleUseState />*/}
            <SimpleExample />
            <Clock />
            <ClockAnalog />
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;


