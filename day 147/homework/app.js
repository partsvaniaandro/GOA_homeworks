const root = ReactDOM.createRoot(document.getElementById('root'))
function Main(){
    const [display, setDisplay] = React.useState(true)
    const [typePassword, setTypePassword] = React.useState(true)
    const [colorTheme, setColorTheme] = React.useState('light')
    return(
        <div className="mainWrap">
            <div className="showTextDiv">
                <button onClick={() => setDisplay(prev => !prev)}>{display ? 'hide' : 'show'}</button>
                <p style={{display:display ? 'block' : 'none'}}>Hello World!</p>
            </div>
            <div className="inputTypeDiv">
                <button onClick={() => setTypePassword(prev => !prev)}>{typePassword ? 'show' : 'hide'}</button>
                <input type={typePassword ? 'password' : 'text'}></input>
            </div>
            <div className="themeDiv" style={{background: colorTheme === 'light' ? '#ffffff' : '#1a1a1a'}}>
                <p style={{color: colorTheme === 'light' ? '#111111' : '#f2f2f2'}}>Hello World</p>
                <button style={{background: colorTheme === 'light' ? '#e5e5e5' : '#333333', color: colorTheme === 'light' ? '#111111' : '#f2f2f2'}}
                onClick={() => setColorTheme(prev => prev === 'light' ? 'dark' : 'light')}>{colorTheme === 'light' ? 'darkMode' : 'lightMode'}</button>
            </div>
        </div>
    )
}
root.render(
    <>
        <Main />
    </>
)