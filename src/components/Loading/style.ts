import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  animation: ${rotate} 1.3s linear infinite;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;
