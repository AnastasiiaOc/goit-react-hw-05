import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../../tmdb-api"

export default function MovieDetailsPage(){

    const params = useParams()
    const [ movieDetail, setMovieDetail] = useState(null)

    useEffect (() =>{

        async function getMovieDetails (){
            try{
                const data = await fetchMovieDetails(params.movieId)
                console.log(data)
                setMovieDetail(data)
            }
            catch {
                console.log("error")
            }
        }
        getMovieDetails()
    },[params.movieId])
    return(
        <div>Movie Details Page - {params.movieId}</div>
    )
}