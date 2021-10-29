import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [sec, setSec] = useState(1)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {

        let time = new Date()

        setInterval (() => {
            console.log('tick')
            // if ( sec <= 60 ) {
            //     setSec((sate) => state + 1)
            // }
            // else if (sec >= 61) {
            //     setSec(0)
            // }
           // sec <= 60 ? setSec((state) => state + 1) : setMinutes((state) =>state + 1) ?
           //  sec >= 61 : setSec(0)
        }, 1000)

    },[sec])

    return <>
    Hello, sec: {sec} - minutes: {minutes}

    </>
}









// export default {
//     title: 'useEffect demo'
// }
//
// export const SimpleExample = () => {
//     const [fake, setFake] = useState(1)
//     const [counter, setCounter] = useState(1)
//     console.log('SimpleExample');
//
//     useEffect(() => {
//         console.log('useEffect every render');
//         document.title = counter.toString()
//     })
//
//     useEffect(() => {
//         console.log('useEffect only first render(componentDidMount)');
//         document.title = counter.toString()
//     }, [])
//
//     useEffect(() => {
//         console.log('useEffect first render and every counter change');
//         document.title = counter.toString()
//     },[counter])
//
//     return <>
//         Hello, {counter} {fake}
//         <button onClick={() => setFake(fake + 1)}>+Fake</button>
//         <button onClick={() => setCounter(counter + 1)}>+Counter</button>
//     </>
// }