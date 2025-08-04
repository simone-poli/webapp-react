import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


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
                <div className="row row-cols-1 row-cols-3 g-3 ">
                    {
                        movies.map(movie => {
                            return (
                              <div className="col" key={movie.id}>
                                <div className="card mt-3">
                                    <div className="card-img-top">
                                        <Link to={`/movies/${movie.id}`}>
                                        <img src={`${import.meta.env.VITE_SERVER_API_URL}${movie.image}`} alt="" />
                                        </Link>
                                    </div>

                                    <div className="card-body text-decoration-none ">
                                        <Link className="text-decoration-none" to={`/movies/${movie.id}`}>
                                        <h4 className="text-dark">{movie.title}</h4>
                                        <p className="text-dark">{movie.abstract}</p>
                                        </Link>
                                    </div>
                                </div>
                              </div>

                            )
                        })
                    }
               </div>
            </div>
        </>
    )
}