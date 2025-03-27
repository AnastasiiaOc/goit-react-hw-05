import { useParams} from "react-router-dom";
import { fetchMovieReviews } from "../../tmdb-api";
import { useState, useEffect } from "react";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
   
    // const {reviewsId} = useParams();// doesn't work if I change into reviewsId
  
    const { movieId } = useParams();
  
    useEffect(() => {
      async function getMovieReviews() {
        try {
          const response = await fetchMovieReviews(movieId);
          const data = response.results;
          setReviews(data);
        } catch (error) {
          console.log(`error getDataReviews -${error}`);
        }
      }
      getMovieReviews();
    }, [movieId]);
  
    return (
      <>
        <h2>Reviews</h2>
        {(reviews.length > 0) ?  (
          <ul>
            {reviews.map((item) => {
              return (
                <li key={item.id}>
                  <p>content {item.content}</p>
                  <p>author: {item.author}</p>
                </li>
              );
            })}
          </ul>
        ) : <b>No reviews yet...</b>}
      </>
    );
  }