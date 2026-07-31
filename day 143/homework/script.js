const root = ReactDOM.createRoot(document.getElementById('root'))
// useState ასრულებს ცვლადის როლს ოღონდ განსხვავება ის არის რომ useState არის რეაქტიული, როდესაც შეიცვლება მისი შიგთავსი, ხდება re-render სადაც საჭირო ელემენტები თავიდან რენდერდება და იღებს იმ შიგთავსს რაც ჩვენ მივუთითეთ useState-ს
function Main(){
    const helloText = React.useState('Hello!')
    const count = React.useState(0)
    const bgColor = React.useState('lightblue')
    const display = React.useState('block')
    const emoji = React.useState('😀')
    const hiText = React.useState('Hello!')
    return <main>
        <div className="helloDiv">
            <p>{helloText[0]}</p>
            <button onClick={() => helloText[1]('Goodbye!')}>Click Me</button>
        </div>
        <div className="countDiv">
            <button onClick={() => count[1](count[0] - 1)}>decrease</button>
            <p>{count[0]}</p>
            <button onClick={() => count[1](count[0] + 1)}>increase</button>
        </div>
        <div className="changeBackground">
            <div className="bgDiv" style={{backgroundColor: bgColor[0]}}></div>
            <button onClick={() => {
                if(bgColor[0] === 'lightblue'){
                    bgColor[1]('lightcoral')
                }
                else{
                    bgColor[1]('lightblue')
                }
            }}>change color</button>
        </div>
        <div className="welcomeDiv">
            <p id="welcomeParagraph" style={{display: display[0]}}>Welcome to React</p>
            <button onClick={() => {
                const welcomeParagraph = document.getElementById('welcomeParagraph')
                if(display[0]=="block"){
                    display[1]('none')
                }
                else{
                    display[1]('block')
                }
            }}>show/hide</button>
        </div>
        <div className="emojiChange">
            <p>{emoji[0]}</p>
            <button onClick={() => {
                if(emoji[0]=='😀'){
                    emoji[1]('😢')
                }
                else{
                    emoji[1]('😀')
                }
            }}>change emoji</button>
        </div>
        <div className="alertDiv">
            <button onClick={() => {alert('alert!')}}>alert</button>
        </div>
        <div className="hiDiv">
            <p>{hiText[0]}</p>
            <button onClick={() => {
                if(hiText[0]=='Hello!'){
                    hiText[1]('Hi there!')
                }
                else{
                    hiText[1]('Hello!')
                }
            }}>change text</button>
        </div>
    </main>
}

function App(){
    return <>
    <Main />
    </>
}
root.render(<App />)
