import {useMemo, useState} from "react";


function generateData () {
    console.log('generateData')
    return 1
}

export const ExampleUseState = () => {
    console.log('example')

    // const initValue = useMemo (generateData, [])
    // const [counter, setCounter] = useState(initValue);

    // const initValue = useMemo (generateData, [])

    const [counter, setCounter] = useState(generateData);

    return <>
    {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    <button onClick={() => setCounter(state => state + 1)}>+</button>
    </>
}