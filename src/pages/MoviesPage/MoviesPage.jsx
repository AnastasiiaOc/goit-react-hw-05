import { SearchMovies } from '../../tmdb-api';
// import axios from "axios";
import { useSearchParams } from 'react-router-dom';
// import MovieList from '../../components/MovieList/MovieList';
// import Loader from '../../components/Loader/Loader'
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';



export default function SearchBar({onSearch}){

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    // const [Loading, setLoading] = useState(false);
    // const [error, setError] = useState(false)
   
    // const [noResults, setNoResults] = useState(false);
    // const [inputValue, setInputValue] = useState('');
    const query = searchParams.get('query') || '';

    function handleSubmit (evt){
        evt.preventDefault();
        const query = evt.target.elements.search.value.trim()
        query === "" ? toast.error ("search query cannot be empty"): onSearch(query);

        evt.target.reset;

    }


    useEffect(() =>{
        async function fetchMovies(searchQuery) {
        try{ 
        // setLoading(true)
        // setMovies(data.hits) 
        const data = await SearchMovies(searchQuery)
        setMovies(data.results || [] )
        } catch {
          console.log("error")
            // setError(true);
        }
        finally{
            // setLoading(false)
        }};
        fetchMovies(query)
    }, [query])

    return (<div>
        <Toaster/>
        <form onSubmit = {handleSubmit}>
            
      {/* {Loading && <Loader />} */}
        <input type="text" 
          autoComplete="off"
          autoFocus
          placeholder="Search mouvies"
          name="search"/>

        <button type="submit">Search</button>
        </form>
        {/* {error&& <p> There will be an error code</p>} */}
        {/* <MovieList movies={movies} /> */}
    </div>)
}


// ========================================================================
