import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';
import noActorPhoto from '../../images/no_actor_photo.png';
import {
  NoCast,
  CastList,
  ActorInfo,
  ActorThumb,
  ActorName,
  Character,
} from './Cast.styled';

export default function Cast() {
  const [
    {
      credits: { cast },
    },
  ] = useOutletContext();
  const imgBaseUrl = 'https://image.tmdb.org/t/p';
  const imgSize = '/w200';

  return cast.length === 0 ? (
    <NoCast> We don't have cast for this movie</NoCast>
  ) : (
    <CastList>
      {cast?.map(({ profile_path, name, character }) => (
        <ActorInfo key={nanoid()}>
          <ActorThumb
            alt="actor"
            src={
              profile_path
                ? `${imgBaseUrl}${imgSize}${profile_path}`
                : noActorPhoto
            }
          ></ActorThumb>
          <ActorName>{name}</ActorName>
          <Character>Character: {character}</Character>
        </ActorInfo>
      ))}
    </CastList>
  );
}
