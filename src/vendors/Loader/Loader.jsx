import { Grid } from 'react-loader-spinner';

import { Wrapper, PageLoader } from './Loader.styled';

export default function Loader({ fallback }) {
  return (
    <Wrapper>
      {fallback ? (
        <>
          <PageLoader />
          <div>LOADING...</div>
        </>
      ) : (
        <Grid heigth="30" width="30" color="grey" ariaLabel="loading" />
      )}
    </Wrapper>
  );
}
