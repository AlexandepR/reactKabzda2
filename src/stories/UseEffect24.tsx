import React, { useEffect, useState} from 'react'




export const SetIntervalExample = () => {
    const [counter, setCounter] = useState('')

    console.log('SetInterval')


        // useEffect(() => {
            // const interval = setInterval(() => {
            //     setCounter(state => state + 1)
            // }, 1000)

            // return () => {
            //     clearInterval(interval)
            // }
        // }, [])

        return <>
            counter: {counter}
        </>
    }



// RESET USE EFFECT
// export default {
//     title: 'useEffect demo'
// }
//
// export const KeysTrackerExample = () => {
//     const [text, setText] = useState('')
//
//     console.log('Component rendered with' + text)
//
//     useEffect(() => {
//         const handler = (e: KeyboardEvent) => {
//             setText(text + e.key)
//         }
//
//         window.addEventListener('keypress', (e) => {
//             console.log(e.code)
//             setText(text + e.key)
//         })
//         window.addEventListener('keypress', handler)
//
//         return () => {
//             window.removeEventListener('keypress', handler)
//         }
//     }, [text]);
//
//
//     return <>
//         Typed text: {text}
//     </>
// }


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