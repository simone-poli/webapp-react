import CardMovies from "../component/CardMovies"
import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"


export default function HomePage() {
    const { movies } = useGlobalContext()


    return (

        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-3 g-3 ">
                    {
                        movies?.map((movie) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <CardMovies movie={movie}></CardMovies>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}