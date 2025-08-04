import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SingleMovie() {

    const { id } = useParams()
    const api_url = `http://localhost:3030/api/movies/${id}`
    const [singleMovie, setSingleMovie] = useState([])



    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSingleMovie(data)
            })
    }, [])



    return (
        <>
            <section className="text-center">
                <div className="my-5">
                    <img src={`${import.meta.env.VITE_SERVER_API_URL}${singleMovie.image}`} alt="" />
                <h3>{singleMovie?.title}</h3>
                <p>{singleMovie.abstract}</p>
                </div>

                <div className="m-5">
                    <h3>Reviews users</h3>
                    {singleMovie?.reviews?.map((review) => (
                        <div key={review.id}>
                            <h4>{review.name}</h4>
                            <p><strong>Voto:</strong> {review.vote}</p>
                            <p>{review.text}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}