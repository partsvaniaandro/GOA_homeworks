const root = ReactDOM.createRoot(document.getElementById('root'))
function InputUseState(){
    const [text, setText] = React.useState()
    return(
        <div className="input">
            <input onChange={(e)=>setText(e.target.value)}></input>
            <p>{text}</p>
        </div>
    )
}
function ListOutput(){
    const [array, setArray] = React.useState(['andria', 'saba', 'lazare'])
    return(
        <ul>
            {array.map((item, index)=>{
                return(<li key={index}>{item}</li>)
            })}
        </ul>
    )
}
function ToDoList(){
    const [list, setList] = React.useState([])
    const [value, setValue] = React.useState()
    return(
        <div className="ToDoList">
            <input value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={() =>
                value ? (setList(prev => [...prev, value]), setValue('')):null
            }>Add Task</button>
            <ul>
                {list.map((item, index)=>(
                    <li key={index}>
                        {item}
                        <button onClick={() => setList(prev => prev.filter((_, i) => i !== index))}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
function Main(){
    return(
        <>
            <InputUseState />
            <ListOutput />
            <ToDoList />
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