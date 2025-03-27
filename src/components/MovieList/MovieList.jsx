// Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.
import { Link, useLocation} from 'react-router-dom';

// =========keep it======
export default function MovieList ({movies}) { 
    const location = useLocation();
    return (  
    <ul>
{movies.map((movie) => (<li key ={movie.id}>
            <Link to={`/${movie.id}`}  state={location}>{movie.title}</Link>
            <span> ({movie.release_date})</span>
</li>)
)} 
    </ul>
)
}

// ====================
{/* //     return (<ul>
//         {movies.map((movie) => { */}
//             return ( <li key ={movie.id}>
//                     {/* <MovieList movie ={movie.title} onClick = {onClick}/> */}
//                     {/* // Need more info about the following: */}
//                     {/* my code:<Link to={`/movies/${movie.id}`} state = {location}></Link> */}
//                     <Link to={`/movies/${movie.id}`} state={{ from: location }}>
//                     {movie.title}</Link>
//                     {/* <Link to="/MovieList"></Link> */}
//                     </li>);})}
       
//     </ul>);
// }


// Хук useLocation
// Повертає об'єкт розташування, що представляє поточний URL, щоразу коли ми переходимо новим маршрутом або оновлюємо частину поточного URL
	