const root = ReactDOM.createRoot(document.getElementById('root'))
function Header(){
    return React.createElement(
        "header",
        {style: {backgroundColor:"#eee", padding: "10px", textAlign: "center"}},
        React.createElement("h1", null, "Welcome to React"),
        React.createElement("p", null, "lorem ipsum")
    )
}
function Main(){
    return React.createElement(
        "main",
        {style: {padding: "20px"}},
        React.createElement("h1", null, "Good things about React"),
        React.createElement(
            "ul",
            null,
            React.createElement("li", null, "reactivity"),
            React.createElement("li", null, "popularity"),
            React.createElement("li", null, "modularity")
        )
    )
}
function Footer(){
    return React.createElement(
        "footer",
        {style:{backgroundColor: "#eee", padding: "20px", textAlign: "center"}},
        React.createElement("small", null, "Not My First React Project")
    )
}

function App(){
    return React.createElement(
        "div",
        null,
        Header(),
        Main(),
        Footer()
    )
}
root.render(App())