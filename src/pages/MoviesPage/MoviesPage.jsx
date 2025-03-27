import { SearchMovies } from '../../tmdb-api';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader'
import { useState, useEffect } from 'react';
import {useDebounce} from 'use-debounce';


export default function MoviesPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
   
    const query = searchParams.get('query') ?? '';
    const [debouncedQuery] = useDebounce(query, 1000);

  
    const changeSearchText = event => {
     
        const nextParams = new URLSearchParams(searchParams);
        if( event.target.value !== ""){
          nextParams.set('query', event.target.value)
        }else{
          nextParams.delete('query')

        }
        setSearchParams(nextParams);
    }

    useEffect(() =>{
    
          async function getMovies() {
        try{ 
        setLoading(true)
        setError(false)
        const data = await SearchMovies(debouncedQuery)
        setMovies(data)
        } catch {
           setError(true);
        }
        finally{
            setLoading(false)
        }};
        getMovies();
    }, [debouncedQuery]);




    return (
      <><div>
      {error && <p>error with connection..</p>}
      {/* <form onSubmit = {changeSearchText}> */}
      <input type="text" value={query} onChange={changeSearchText} />
      {/* <button type="submit">Search</button>
      </form> */}
      {(movies.length > 0) ? (<MovieList movies={movies}/>) : <p>No films match your search...</p>}
  
  </div>
  {loading && <Loader/>}</>
    )
}

