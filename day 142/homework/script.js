let root = ReactDOM.createRoot(document.getElementById('root'))
function Main(){
    const handleClick =(id)=>{
        console.log('aded to arr' + id)
        console.log('database initialization')
        console.log('sent data to backend')
        console.log('alert!')
        return 'andria'
    }
    return <div className = 'main'>
        <div className = "topImage"><img src="/day 142/homework/images/image.png" /></div>
        <div className = 'card'>
            <div className = 'text'>
                <div className = 'title'><p>Order Summary</p></div>
                <div className = 'info'><p>You can now listen to millions of songs,<br/>audiobooks, and podcasts on any device<br/>anywhere you like!</p></div>
            </div>
            <div className = 'priceBox'>
                <div className = 'tuneIcon'><img src="/day 142/homework/images/music-alt.png"/></div>
                <div className="planPrice">
                    <div className="plan"><p>Annual Plan</p></div>
                    <div className="price"><p>$59.99/Year</p></div>
                </div>
                <div className="changePlan"><a href="#">Change</a></div>
            </div>
            <div className="payment"><button onClick={()=>{handleClick(3)}}>Proceed to Payment</button></div>
            <div className="cancel"><a href="#">Cancel Order</a></div>
        </div>
    </div>
}
function App(){
    return <>
       <Main />
    </>
}
root.render(<App />)