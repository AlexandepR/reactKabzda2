import React, {useEffect, useState} from 'react'



export default {
    title: 'useEffect demo'
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with'  + text)

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            console.log(e.code)
            setText((state) => state + e.code)
        })

        return () => {
            console.log('RESET COMPONENT' + ' ' + text)
        }

    }, [text]);

    const increase = () => {setText(text + 1)}

    return <>
        Hello, counter: {text}
        <button onClick={increase}>+</button>
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