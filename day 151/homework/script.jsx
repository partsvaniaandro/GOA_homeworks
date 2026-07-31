const root = ReactDOM.createRoot(document.getElementById('root'))
function Message({text}){
    return <p>{text}</p>
}
function UserInfo({name, age}){
    return(
        <ul>
            <li>name: {name}</li>
            <li>age: {age}</li>
        </ul>
    )
}
function Counter({num, increment, changeFunc, reset}){
    return(
        <div>
            <p>{num}</p>
            <button onClick={() => changeFunc(increment)}>change</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
function Main(){
    const [number, setNumber] = React.useState(0)
    return(
        <>
            <Message text={'Hello World'} />
            <UserInfo name={'andria'} age={16} />
            <Counter 
                num={number}
                increment={5}
                changeFunc={(inc) => setNumber((prev) => prev + inc)}
                reset={() => setNumber((prev) => prev = 0)}
            />
        </>
    )
}

function App(){
    return(
        <>
            <Main />
        </>
    )
}
root.render(<App />)