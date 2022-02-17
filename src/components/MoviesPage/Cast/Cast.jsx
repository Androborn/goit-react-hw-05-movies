import { useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import noActorPhoto from '../../../images/no_actor_photo.png';

export default function Cast() {
  const imgBaseUrl = 'https://image.tmdb.org/t/p';
  const imgSize = '/w200';
  let location = useLocation();

  return (
    <ul>
      {location.state.cast.map(actor => (
        <li key={nanoid()}>
          <img
            alt="actor"
            src={
              actor.profile_path
                ? `${imgBaseUrl}${imgSize}${actor.profile_path}`
                : noActorPhoto
            }
          ></img>
          <div>{actor.name}</div>
          <div>Character: {actor.character}</div>
        </li>
      ))}
    </ul>
  );
}
