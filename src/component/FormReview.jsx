import { useState } from "react"


export default function FormReview(){
 
 
 
 
 
    const [formData, setFormData] = useState({
        name: '',
        vote: 1,
        text: ''
    })
    

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













    return (
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
    )
}