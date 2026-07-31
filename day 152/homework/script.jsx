const root = ReactDOM.createRoot(document.getElementById("root"))
//მარტივი სიტყვებით რომ ვთქვათ, state-ს კომპონენტი ფლობს და აკონტროლებს. prop, ინფორმაცია რომელსაც თვით კომპონენტი იღებს, და კომპონენტი მას ვერ აკონტროლებს
//prop-ები არიან read only იმიტომ რომ კომპონენტები მათ ვერ ფლობენ, ეს მხოლოდ მშობელ ელემენტს შეუძლია.
function Title({ title }){
    return(
        <h1>{title}</h1>
    )
}
function Profile({ username, country }){
    return(
        <>
            <ul>
                <li>username: {username}</li>
                <li>country: {country}</li>
            </ul>
        </>
    )
}
function Price({ amount }){
    return(
        <p>{amount + 10}</p>
    )
}
function Main(){
    return(
        <>
            <Title title={"Welcome To React!"} />
            <Profile username={"andria"} country={"georgia"} />
            <Price amount={10} />
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