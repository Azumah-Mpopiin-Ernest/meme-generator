import { useState, useEffect, useRef } from "react"

export default function WindowWidth(){



    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

useEffect(() => {
    console.log("re-ran?")
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
    })
}, [])

return(
    <main>
        <h3>Window Width: {windowWidth}</h3>
        
    </main>
)
}



