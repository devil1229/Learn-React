import React from 'react'

export default function mainbar(){


    const [meme , setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    //console.log(meme)

    const [memeData, setMemeData] = React.useState([])

    function handleChange(event){
        //console.log(event)
        const {name, value} = event.target
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memeData.length)
        const url = memeData[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    return (
        <div className="mainbar">
            <div className="mainbar-text">
                <input 
                    className="mainbar-input1" 
                    type="text" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="mainbar-input2" 
                    type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="mainbar-button">Get a new meme image 🖼</button>
            </div>
            <div className='mainbar-image'>
                <img className='meme-image' src={meme.randomImage} alt="meme Image" />
                <h2 className='meme-topText meme-text'>{meme.topText}</h2>
                <h2 className='meme-bottomText meme-text'> {meme.bottomText} </h2>
            </div>
            
        </div>
    )
}