import { useEffect, useState } from "react"


export default function HomePage() {


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

        <>
            <div className="container">
                <ul>
                    {
                        movies.map(movie => {
                            return (
                                <li key={movie.id}>
                                    Title: {movie.title}
                                    Director: {movie.title}
                                    Genre: {movie.genre}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}