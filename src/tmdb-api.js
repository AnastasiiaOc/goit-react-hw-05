import axios from "axios"


axios.defaults.baseURL = "https://api.themoviedb.org/3/"

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDFiMWM3YWI5OTA4MmY2MzljNmEyNzlmYjVkYWExYiIsIm5iZiI6MTczOTM3NjI0NS4wNTUsInN1YiI6IjY3YWNjNjc1Zjg1ZjE5OTEzYTliOTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PFzrwslGqtci0M-tVE6kr7pRcb16xW0upZ-imAm0zs"
// Токен доступу повинен долучатися до кожного запиту у вигляді HTTP-заголовка Authorization, ось приклад.

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
};

// export async function SearchMovies({searchQuery}){
//   options.params ={
//     query:searchQuery,
//     include_adult: false,
//     language: 'en-US',
//     page: 1,
//   };
//   const response = await axios.get("search/movie",options);
//   return (response.data.results)

// }

export const SearchMovies = async query => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
  return response.data.results;
};

// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const fetchMovieDetails = async (id) =>{
    const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    console.log(resp.data)
    return resp.data;
}


// export default async function fetchMovies() {
export const fetchMovies = async() => {
  try {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    return data.results;
  } catch (error) {
    console.error("Erorr request:", error);
  }
}


export const fetchMovieCast = async(id) =>{

  const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
  return resp.data.cast;
}

// export const fetchMovieReviews = async(id) =>{

//   const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
//   console.log (resp.data)
//   return resp.data;
// }

export async function fetchMovieReviews(id) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );

    return data;
  } catch (error) {
    console.log(`error reviews -${error}`);
  }
}



