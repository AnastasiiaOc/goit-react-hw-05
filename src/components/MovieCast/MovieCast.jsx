import { useParams } from "react-router-dom"
import {fetchMovieCast} from "../../tmdb-api"
import { useState, useEffect } from "react";

import css from "../MovieCast/MovieCast.module.css"

export default function MovieCast (){
   
    // const defaultImg =
    // "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

    const {movieId} = useParams();
    const [cast, setCast] = useState([])

    useEffect (() => {

        async function getMovieCast(){
           
            const data = await fetchMovieCast(movieId);
            setCast(data)
            console.log(data)
        }
        getMovieCast()
    }, [movieId])



    return(
        <><b>Movie Cast</b>
{cast.length > 0 && <ul className={css.castList}>
    {cast.map((actor, index) => (
          <li key = {actor.id}>
    {/* <li key = {`actor.id-${index}`}> */}
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
            <div>
            {/* <img
                  src={
                    // actor.profile_path
                       `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    //   : defaultImg
                  }
                /> */}
                <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}/>
            </div>

        </li>

    ))}
    </ul>}</>
        
    )
}


// cast
// cast_id
// : 
// 73
// character
// : 
// "Mufasa (voice)"
// credit_id
// : 
// "6784ce60bd793c03544ec5ff"
// gender
// : 
// 2
// id
// : 
// 1763709
// known_for_department
// : 
// "Acting"
// name
// : 
// "Aaron Pierre"
// order
// : 
// 0
// original_name
// : 
// "Aaron Pierre"
// popularity
// : 
// 1.7548
// profile_path
// : 
// "/z2cMMZyWzv5ztT6pFdAAjB3u7CQ.jpg"