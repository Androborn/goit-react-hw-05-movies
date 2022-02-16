import { useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

export const Reviews = () => {
  let location = useLocation();

  console.log(location.state.reviews.results);

  return location.state.reviews.results.length === 0 ? (
    <div> We don't have any reviews for this movie</div>
  ) : (
    <ul>
      {location.state.reviews.results.map(review => (
        <li key={nanoid()}>
          <div>Author: {review.author}</div>
          <div>{review.content}</div>
        </li>
      ))}
    </ul>
  );
};
