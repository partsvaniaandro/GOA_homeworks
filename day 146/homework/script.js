const root = ReactDOM.createRoot(document.getElementById('root'))
//useState არის react-ის hook რომელიც ანაცვლებს ნორმალურ ცვლადებს რომლებიც არიან არა-რეაქტიულები რათგან useState რეაქტიულია, შეიცვლება თუ არა მაშინვე re-render ხდება და რაც საჭიროა განახლდება.
function Main(){
    const Hello = React.useState('Hello')
    const Count = React.useState(0)
    const Display = React.useState('block')
    const DisplayBtn = React.useState('displayed')
    return(
        <div className='mainWrap'>
            <div className="helloDiv">
                <p className="helloParagraph">{Hello[0]}</p>
                <button className="helloBtn" onClick={() => Hello[1]('World')}>Click Me</button>
            </div>
            <div className="counterDiv">
                <div className="counterBtns">
                    <button onClick={() => {Count[1](Count[0]+1)}}>+</button>
                    <p className="count">{Count[0]}</p>
                    <button onClick={() => {Count[1](Count[0]-1)}}>-</button>
                </div>
                <div className="resetBtn">
                    <button onClick={() => {Count[1](0)}}>Reset</button>
                </div>
            </div>
            
            <div className="displayTextDiv">
                <p style={{display:Display[0]}}>Hello World</p>
                <button onClick={() => {if (Display[0] == 'block'){
                    Display[1]('none')
                    DisplayBtn[1]('hidden')
                }
                else{
                    Display[1]('block')
                    DisplayBtn[1]('displayed')
                }}}>{DisplayBtn[0]}</button>
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
root.render(<App />)