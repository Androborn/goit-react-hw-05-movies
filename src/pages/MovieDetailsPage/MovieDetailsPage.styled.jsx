import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
`;

export const PageBlockHeader = styled.h3``;

export const AboutMovie = styled.div`
  display: flex;
`;

export const MoviePoster = styled.img`
  width: 15vw;
  margin-right: 2rem;
`;

export const MovieInfo = styled.div`
  display: block;
`;

export const MovieTitle = styled.h2``;

export const MovieScore = styled.p``;

export const MovieOverview = styled.p`
  width: 35vw;
`;

export const MovieGenres = styled.p`
  width: 35vw;
`;

export const StyledLink = styled(Link)`
  margin-right: 1rem;
`;
