import { useState, useEffect } from "react"
import { fetchMovies } from "../../tmdb-api"
import MovieList from "../../components/MovieList/MovieList"

export default function HomePage () {

    const [movieLink, setMovieLink] = useState([])

    useEffect (() => {

        async function getMovie (){
            try{
                const data = await fetchMovies()
                setMovieLink(data)
            }
            catch{
                console.log("error")
            }
        }
        getMovie()
     
    }, [])
    return (
        <div>
            <p>Trending movies</p>
            <MovieList movies ={movieLink}/>
        </div>
    )
}