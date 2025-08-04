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
                <h3>{singleMovie?.title}</h3>
                <p>{singleMovie.abstract}</p>
                <div>
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