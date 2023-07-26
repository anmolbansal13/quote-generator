import React from 'react';
// import quote from "../images/quote.png"

export default function Quote(){

    const [quote, setQuote] = React.useState({
        topText: "",
        bottomText: "",
        // randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    // const [quoteImage, setQuoteImage] = React.useState([]);
    const [allQuotes, setAllQuotes] = React.useState([]);

    React.useEffect(async() =>{
        await fetch("https://api.imgflip.com/get_memes")
        // await fetch("https://images.ctfassets.net")
            .then(res => res.json())
            // .then(quotesData => setAllQuotes(quotesData.data.quotes))
            .then(data => setAllQuotes(data.data.memes))
            // .then(data => setAllQuotes(data.fields.file.url))

    }, [])

    function getQuoteImage(){
        // const allQuotes = allQuotes.data.quotes;
        const randomNumber = Math.floor(Math.random()*allQuotes.length);
        const url = allQuotes[randomNumber].url;
        setQuote(prevQuote => ({
            ...prevQuote,
            randomImage: url
        }));
    }
    function handleChange(event){
        const {name, value}=event.target;
        setQuote(prevQuote => ({
            ...prevQuote,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input
                    type='text' 
                    className='form--input' 
                    placeholder='top quote' 
                    name="topText"
                    value={quote.topText}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    className='form--input' 
                    placeholder='bottom quote'
                    name="bottomText"
                    value={quote.bottomText} 
                    onChange={handleChange}  
                />
                <button className='form--input form--button'
                    onClick={getQuoteImage}
                    >Get a new Quote !!!</button>
            </div>
            <div className='quote'>
                <img src={quote.randomImage} className='quote--image' />
                <h2 className="quote--text top">{quote.topText}</h2>
                <h2 className="quote--text bottom">{quote.bottomText}</h2>
            </div>
        </main>
    )
};