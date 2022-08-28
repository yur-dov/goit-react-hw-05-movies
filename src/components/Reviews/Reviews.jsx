import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../service/serviceApi'

const Reviews = () => {
  const movie_id = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchReviews(movie_id).then(data => setReviews(data.results));
  }, [movie_id]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content, author_details }) => (
          <li key={id} >
            <h1>
              Author:
              <span> {author}</span>
            </h1>

            <p>{content}</p>
            {author_details.rating && (
              <p>
                Rating:
                <span>
                  {author_details.rating}
                </span>
              </p>
            )}
          </li>
        ))
      ) : (
        <p>
          We don't have any reviews for this movie
        </p>
      )}
    </ul>
  );
};
export default Reviews;
