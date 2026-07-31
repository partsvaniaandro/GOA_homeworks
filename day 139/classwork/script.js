const root = ReactDOM.createRoot(document.getElementById('root'))
function Header(){
    return (<header style={{background: '#eee', padding: '10px', textAlign: 'center'}}>
        <h1>Welcome to React</h1>
        <p>lorem ipsum</p>
    </header>
    )
}
function Main(){
    const title = 'Good things about React'
    const age = 10
    return (<main style = {{padding: '20px'}}>
        <h1>{title}</h1>
        <h3>Years in Production: {age}</h3>
        <ul>
            <li>reactivity</li>
            <li>popularity</li>
            <li>modularity</li>
        </ul>
    </main>
    )
}
function Footer(){
    return (<footer style = {{background: '#eee'}}>
        <small>Not My First React Project</small>
    </footer>
    )
}
function App(){
    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
root.render(<App />)
//არასწორი გამოძახება -> App()
// სწორი გამოძახება -> <App />