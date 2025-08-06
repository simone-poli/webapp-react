import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()


function GlobalProvider({children}) {

    const url_api = "http://localhost:3030/api/movies"
    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetch(url_api)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data)

            })
    }, [])





    return (
        <GlobalContext.Provider value={{movies, setMovies}}>
            {children}
        </GlobalContext.Provider>
    )
}


    function useGlobalContext(){
        return useContext(GlobalContext)
    }

    export {GlobalProvider, useGlobalContext}