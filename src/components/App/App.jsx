import{ lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

// import HomePage from '../../pages/HomePage/HomePage'
// import MoviesPage from '../../pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
// import MovieCast from '../MovieCast/MovieCast'
// import MovieReviews from '../MovieReviews/MovieReviews'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(()=>import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage =lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() =>import ('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))


function App() {

  return (
    <>
     <Navigation />
     <Suspense
     fallback ={
      <p>
        <b>Loading page...</b>
      </p>
     }/>
     <Routes>
      <Route path ="/" element ={<HomePage/>}/>
      <Route path ="/movies" element ={<MoviesPage/>}/>
      <Route path ="/:movieId" element ={<MovieDetailsPage/>}>
      <Route path ="cast" element ={<MovieCast/>}/>
      <Route path ="reviews" element ={<MovieReviews/>}/>
      </Route>
      <Route path ="*" element ={<NotFoundPage/>}/>
     </Routes>
     <Suspense/>
    </>
  )
}

export default App


// cle <API>801b1c7ab99082f639c6a279fb5daa1b</API>
// jeton d'access en lecture eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDFiMWM3YWI5OTA4MmY2MzljNmEyNzlmYjVkYWExYiIsIm5iZiI6MTczOTM3NjI0NS4wNTUsInN1YiI6IjY3YWNjNjc1Zjg1ZjE5OTEzYTliOTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PFzrwslGqtci0M-tVE6kr7pRcb16xW0upZ-imAm0zs