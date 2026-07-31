const root = ReactDOM.createRoot(document.getElementById('root'))
function Header(){
    return(
        <header>
            <h1>apple or banana</h1>
        </header>
    )
}
function Main(){
    const appleBanana = ['apple.png', 'banana.png']
    const sadCatArr = ['https://media.tenor.com/1Z8PTLFT8HUAAAAm/voices-cat.webp', 'https://media.tenor.com/rr8peMAKqqgAAAAM/sad-cat.gif', 'https://media1.tenor.com/m/sQf0cT8G5soAAAAC/cat.gif']
    const happyCatArr = ['https://media.tenor.com/kQA86PqyXZQAAAAm/small-dancing-white-cat-dance-funny.webp', 'https://media.tenor.com/5EYt5mnIMvwAAAAm/silly-cat-dance.webp', 'https://media.tenor.com/sWCbSkkLG-gAAAAm/funny-cat.webp', 'https://media.tenor.com/n52WS-CO8tsAAAAi/cat-cats.gif']
    function randomImg(){
        const random = Math.floor(Math.random() * appleBanana.length)
        document.getElementById('mainImg').src = appleBanana[random]
    }
    function randomHappyCat(){
        const random = Math.floor(Math.random() * happyCatArr.length)
        document.getElementById('catGif').src = happyCatArr[random]
    }
    function randomSadCat(){
        const random = Math.floor(Math.random() * sadCatArr.length)
        document.getElementById('catGif').src = sadCatArr[random]
    }
    function checkImgBanana(){
        document.getElementById('mainText').style.display = 'none'
        document.getElementById('mainImg').style.display = 'none'
        document.getElementById('mainButtons').style.display = 'none'
        setTimeout(() => {
            document.getElementById('catGif').style.display = 'none'
            document.getElementById('mainText').style.display = 'block'
            document.getElementById('mainImg').style.display = 'block'
            document.getElementById('mainButtons').style.display = 'flex'
            randomImg()
        }, 4000);
        if(document.getElementById('mainImg').getAttribute('src') === 'banana.png'){
            randomHappyCat()
            document.getElementById('catGif').style.display = 'block'
        }
        else{
            randomSadCat()
            document.getElementById('catGif').style.display = 'block'
        }
    }

    function checkImgApple(){
        document.getElementById('mainText').style.display = 'none'
        document.getElementById('mainImg').style.display = 'none'
        document.getElementById('mainButtons').style.display = 'none'
        setTimeout(() => {
            document.getElementById('catGif').style.display = 'none'
            document.getElementById('mainText').style.display = 'block'
            document.getElementById('mainImg').style.display = 'block'
            document.getElementById('mainButtons').style.display = 'flex'
            randomImg()
        }, 4000);
        if(document.getElementById('mainImg').getAttribute('src') === 'apple.png'){
            randomHappyCat()
            document.getElementById('catGif').style.display = 'block'
        }
        else{
            randomSadCat()
            document.getElementById('catGif').style.display = 'block'
        }
    }
    return(
        <main>
            <h2 id = 'mainText'>apple or banana?</h2>
            <img src='apple.png' id='mainImg'></img>
            <img src='https://media.tenor.com/kQA86PqyXZQAAAAm/small-dancing-white-cat-dance-funny.webp' id='catGif' style={{display:'none', marginTop: '105px'}}></img>
            <div id = 'mainButtons'>
                <button onClick={checkImgApple}>apple</button>
                <button onClick={checkImgBanana}>banana</button>
            </div>
            <h3 style = {{marginTop: '100px'}}>nested divs</h3>
            <div id='box'>
                <div id='innerBox'>
                    <div id='innerInnerBox'></div>
                </div>
            </div>
        </main>
    )
}
function Footer(){
    return(
        <footer>
            <h3>orange</h3>
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