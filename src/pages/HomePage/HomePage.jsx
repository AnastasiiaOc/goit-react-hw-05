import { useState, useEffect } from "react"
import { fetchMovies } from "../../tmdb-api"
import MovieList from "../../components/MovieList/MovieList"

export default function HomePage () {

    const [movieLink, setMovieLink] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect (() => {

        async function getMovie (){
            try{
                setIsLoading(true);
                setError(false);
                
                const data = await fetchMovies()
                setMovieLink(data)
            }
            catch{
                setError(true);
            }
            finally{
                setIsLoading(false);
            }
        }
        getMovie()
     
    }, [])
    return (
    
        <div>
                
        {isLoading && <b> Loading</b>}
        {error && <b> error occured..</b>}
            <p>Trending movies</p>
            <MovieList movies ={movieLink}/>
        </div>
    )
}