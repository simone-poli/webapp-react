import { Link } from "react-router-dom"


export default function CardMovies({movie}) {

    return (
        <div className="card mt-3">
            <div className="card-img-top">
                <Link to={`/movies/${movie.id}`}>
                    <img src={`${import.meta.env.VITE_SERVER_API_URL}${movie.image}`} alt="" />
                </Link>
            </div>

            <div className="card-body text-decoration-none text-center">
                <Link className="text-decoration-none" to={`/movies/${movie.id}`}>
                    <h4 className="text-dark">{movie.title}</h4>
                    <p className="text-dark">{movie.abstract}</p>
                </Link>
            </div>
        </div>
    )
}