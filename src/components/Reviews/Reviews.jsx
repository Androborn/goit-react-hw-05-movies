import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  ReviewsList,
  NoReviews,
  Review,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

export default function Reviews() {
  const [
    {
      reviews: { results },
    },
  ] = useOutletContext();

  return results?.length === 0 ? (
    <NoReviews> We don't have any reviews for this movie</NoReviews>
  ) : (
    <ReviewsList>
      {results?.map(({ author, content }) => (
        <Review key={nanoid()}>
          <ReviewAuthor>Author: {author}</ReviewAuthor>
          <ReviewText>{content}</ReviewText>
        </Review>
      ))}
    </ReviewsList>
  );
}
