import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const PageLoader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 0.6s linear infinite;
`;
