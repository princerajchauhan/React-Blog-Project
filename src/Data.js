import axios from "axios"
import { createContext, useEffect, useState } from "react"

const Data = createContext()

export const Context = (props) => {
    const [api, setApi] = useState()

    useEffect(() => {
        async function fun() {
            const data = await axios.get("https://prince-blog-project.onrender.com/api").then(res => res.data).catch(err => console.log(err))
            setApi(data)
        }

        fun()
    }, [])

    return (
        <>
            {api && <Data.Provider value={api}>
                {props.children}
            </Data.Provider>}
        </>

    )
}


export default Data