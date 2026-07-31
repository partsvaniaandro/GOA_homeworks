const root = ReactDOM.createRoot(document.getElementById('root'))
function Main(){
    const [number, setNumber] = React.useState(0)
    const [text, setText] = React.useState(true)
    return(
        <div className="mainWrap">
            <div className="numberCounterDiv">
                <button className="plusBtn" onClick={() => setNumber(prev => prev + 1)}>+</button>
                <p>{number}</p>
                <button className="minusBtn" onClick={() => setNumber(prev => prev - 1)}>-</button>
            </div>
            <div className="helloTextDiv">
                <p>{text ? 'Hello' : 'Goodbye'}</p>
                <button onClick={() => setText(prev => !prev)}>{text ? 'Goodbye' : 'Hello'}</button>
            </div>
        </div>
    )
}
function App(){
    return(
        <>
            <Main />
        </>
    )
}
root.render(
    <App />
)