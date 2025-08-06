import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { bouncy } from 'ldrs'
import Loader from "../component/Loader"
bouncy.register()




export default function SingleMovie() {

    const { id } = useParams()
    const [formData, setFormData] = useState({
        name: '',
        vote: 1,
        text: ''
    })
    const api_url = `http://localhost:3030/api/movies/${id}`
    const [singleMovie, setSingleMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



    function handleSubmit(e) {
        e.preventDefault()

        fetch(`${api_url}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)


                if (data.error) {
                    console.error(data.message)
                    return
                }


                setSingleMovie(prevState => ({
                    ...prevState,
                    reviews: [...prevState.reviews, data.review]
                }))

                setFormData({
                    name: '',
                    vote: 1,
                    text: ''
                })
            })
    }



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
                <form className="card my-3" onSubmit={handleSubmit}>
                    <div className="mb-3 container">
                        <h3 className="bg-dark text-light text-uppercase">Insert your review</h3>
                        <label htmlFor="name" className="form-label">name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="helpId"
                            placeholder="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <label htmlFor="vote" className="form-label">Vote</label>
                        <input
                            type="number"
                            min={1}
                            max={5}
                            className="form-control"
                            name="vote"
                            id="vote"
                            aria-describedby="helpId"
                            placeholder="Insert your vote for the film"
                            value={formData.vote}
                            onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                        />
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Text</label>
                            <textarea
                                className="form-control"
                                name="text"
                                id="text"
                                rows="3"
                                placeholder="Insert your review for the film"
                                value={formData.text}
                                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            >
                            </textarea>
                        </div>

                        <button
                            type="submit"
                            name=""
                            id=""
                            className="btn btn-primary"
                        >
                            Send review
                        </button>



                    </div>
                </form>






                <button className="btn btn-dark" onClick={() => navigate(-1)}>Back Home</button>

            </section>
        </>
    )
}