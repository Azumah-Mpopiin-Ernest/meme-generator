import { useEffect, useState } from "react"
import WindowWidth from "./windowWidth"
export default function Memes(){

    const [show, setShow ] = useState(true)

function toggleShow() {
    setShow(prevShow => !prevShow)
}


    const [memes, setMemes] = useState()
const [url, setUrl] = useState("https://i.imgflip.com/30b1gx.jpg")
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json())
    .then(data => setMemes(data))
    
    }, []
        
    )

    function handleRandomImage(){
        return(
            setUrl(memes.data.memes[Math.floor(Math.random() * 100) + 1].url)
        )
    }

    return(
        <main>
            <img src={url} alt="meme image" />
             <button onClick={handleRandomImage}  className="get-new-meme-image">Get a new meme image</button>
             <button onClick={toggleShow}>Toggle</button>
             {show && <WindowWidth />}
        </main>
    )
}






