import { NavLink,Link, Outlet, useParams, useLocation} from "react-router-dom"

import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../tmdb-api"


export default function MovieDetailsPage(){

    const params = useParams()
    const [ movieDetail, setMovieDetail] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    const location = useLocation();
    const backLinkRef = useRef(location.state)
    useEffect (() =>{

        async function getMovieDetails (){
            try{
                setIsLoading(true);
                setError(false);
                const data = await fetchMovieDetails(params.movieId);
                setMovieDetail(data);
            }
            catch {
                setError(true)
            }
            finally{setIsLoading(false)

            }
        }
        getMovieDetails()
    },[params.movieId])



    return(
        <div>
                <Link to = {backLinkRef.current}>Go back</Link>
    {isLoading && <b> Loading...</b>}
    {error && <b>Error occured..</b>}
 {/* <h2>Movie Details Page - {params.movieId}</h2> */}
 {movieDetail && (<>
 <div>
 <h2>{movieDetail.original_title} <span>({movieDetail.release_date})</span></h2>
 </div>
 <div>
        <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
              alt={movieDetail.title}
        ></img> 
 </div>
<div>
<p> User Score: {movieDetail.vote_average}</p>
<p>Origin country: {movieDetail.origin_country}</p>
<h3>Overview:</h3> <p>{movieDetail.overview}</p>
<h3>Genres:</h3> <p>{movieDetail.genres.map((genre) => <span key ={genre.id}>
{genre.name} </span> )}</p>
</div>



<ul>
    <li>
     {/* Vidnosnij URL we take off the slash:     <NavLink to ="/cast"/> Cast <NavLink/>    */}
    <NavLink to ="cast"> Cast </NavLink>
    {/* <Link to="cast">Cast</Link> */}
    </li>
    <li>
    <NavLink to ="reviews"> Reviews </NavLink>

    </li>  
</ul>

<Suspense fallback ={<div>Loading Movie Details</div>}> 
<Outlet/>
</Suspense>

</>
)}
        </div>
    )
}


