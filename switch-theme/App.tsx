import {useState, useEffect} from "react"

import "./root.css"

export const changeTheme = () => {

    const [darkTheme, setDarkTheme] = useState(true)
    const [buttonClassName, setButtonClassName] = useState("light-theme")

    useEffect(()=>{
        if(darkTheme){
            setButtonClassName("dark-theme")
        } else setButtonClassName("light-theme")
        }, [darkTheme])

        return (
            <>
            <h1 className={buttonClassName}>My Car</h1>
            <div onClick={()=>setDarkTheme((prevState)=>!prevState)}>switch theme</div>
            </>
        );
    }


    //to make it work
