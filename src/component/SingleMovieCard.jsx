export default function SingleMovieCard({singleMovie}){



    return(
        <>
        <div className="my-5">
                    <img src={`${import.meta.env.VITE_SERVER_API_URL}${singleMovie.image}`} alt="" />
                    <h3>{singleMovie?.title}</h3>
                    <p>{singleMovie.abstract}</p>
                </div>

               
                </>
    )
}