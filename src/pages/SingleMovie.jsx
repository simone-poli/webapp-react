import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { bouncy } from 'ldrs'
import Loader from "../component/Loader"
import FormReview from "../component/FormReview"
bouncy.register()




export default function SingleMovie() {

    const { id } = useParams()
    const api_url = `http://localhost:3030/api/movies/${id}`
    const [singleMovie, setSingleMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



    



    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.error) {
                    if (data.message === 'Not found') {
                        return navigate('/not-found')
                    }
                }
                setSingleMovie(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }


    return (
        <>
            <section className="text-center">
                <div className="my-5">
                    <img src={`${import.meta.env.VITE_SERVER_API_URL}${singleMovie.image}`} alt="" />
                    <h3>{singleMovie?.title}</h3>
                    <p>{singleMovie.abstract}</p>
                </div>

                <div className="m-5 container">
                    <h3 className="bg-dark text-light text-uppercase">Reviews users</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-3 my-4">
                        {singleMovie?.reviews?.map((review) => (

                            <div className="col" key={review.id}>
                                <h4>{review.name}</h4>
                                <p><strong>Voto:</strong> {review.vote}</p>
                                <p>{review.text}</p>
                                <hr />
                            </div>

                        ))}
                    </div>
                </div>
                <FormReview />






                <button className="btn btn-dark" onClick={() => navigate(-1)}>Back Home</button>

            </section>
        </>
    )
}