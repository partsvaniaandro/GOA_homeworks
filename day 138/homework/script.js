const root = ReactDOM.createRoot(document.getElementById('root'))
function Header(){
    return React.createElement(
        'header',
        {style: {backgroundColor:"#A7C7E7", textAlign: 'center', height: '200px',display: 'flex', justifyContent: 'center', alignItems: 'center'}},
        React.createElement('h1', {style: {color:'#2E3A59'}}, 'HEADER')
    )
}
function Main(){
    return React.createElement(
        'main',
        {style: {backgroundColor: '#D9EAFD', textAlign: 'center', height: '510px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}},
        React.createElement('h2', {style: {color: '#2E3A59'}}, 'MAIN'),
        React.createElement(
            'div',
            {style: {backgroundColor: 'green', width: '200px', height: '200px', display:'flex', justifyContent: 'center', alignItems:'center'}},
            React.createElement(
                'div',
                {style: {backgroundColor: 'blue', width: '100px', height: '100px', display:'flex', justifyContent: 'center', alignItems:'center'}},
                React.createElement(
                    'div',
                    {style: {backgroundColor: 'red', width: '50px', height: '50px'}}
                )
            )
        )
    )
}


function Footer(){
    return React.createElement(
        'footer',
        {style: {backgroundColor: '#B8D8BA', textAlign: 'center', height: '209px', display: 'flex', justifyContent: 'center', alignItems: 'center'}},
        React.createElement('h3', {style: {color: '#2E3A59'}}, 'FOOTER')
    )
}
function App(){
    return React.createElement(
        'div',
        null,
        Header(),
        Main(),
        Footer()
    )
}
root.render(App())

//render-ს გამოაქვს მითითებულ root-ში ჩვენი შექმნილი აპლიკაცია.
//jsx არის ობიექტი რომელიც გადაეცემა რენდერს, ის შეიცავს ინფორმაციას რომელიც საჭირო არის იმისთვის რომ რენდერმა სწორედ გამოიტანოს rootში ის რაც არის მითითებული jsx-ში
