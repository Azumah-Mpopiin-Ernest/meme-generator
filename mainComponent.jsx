import { useState, useEffect, useRef } from "react"
import { Link, Element } from "react-scroll"

export default function MainComponent(){


    const [meme, setMeme] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One cannot simply",
        bottomText: "Walk into Mordor"
    })
    


function handleChange(event){
    const {name, value} = event.currentTarget
    setMeme(prevMeme => (
        {...prevMeme,
            [name]:value
        }
    ))
}
  const [memes, setMemes] = useState()

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json())
    .then(data => setMemes(data))
    
    }, []
        
    )

    function handleRandomImage(){
       
            setMeme(prevUrl => (
                {...prevUrl, 
               imageUrl:  memes.data.memes[Math.floor(Math.random() * memes.data.memes.length) + 1].url}
            )
            
                )
        
    }


    // const scrollToSection = useRef(null)

    // function toggleScroll() {
    //     scrollToSection.current.scrollIntoView({
    //         behaviour: "smooth"
    //     })
    // }

    return(
        <section className="meme-generator">

            <header className="header">
            <img src="../images/troll-face.png" alt="logo" />
            <h1>Meme Generator</h1>
        </header>
        <main className="main-components">
        <form  className="form">
            <div>
            <label htmlFor="top-text">Top text</label>
            <input 
            type="text"
            id="top-text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
               />
            </div>
            
            <div>
            <label htmlFor="bottom-text">Bottom text</label>
            <input  
            type="text"
             id="bottom-text"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
              />
            </div>
            
        </form>
        {/* <Link to="target" smooth={true} duration={1000}> */}
        <button onClick={handleRandomImage} className="get-new-meme-image">Get a new meme image</button>
        {/* </Link> */}
        

        <div className="meme-image">
            <img src={meme.imageUrl} alt="meme image" />
            <span className="top-text">{meme.topText}</span>
            <span className="bottom-text">{meme.bottomText}</span>
        </div>
       
        </main>
        {/* <Element name="target">
        <section >Scroll here...</section>
        </Element> */}
        
        </section>
            

        
    )

}