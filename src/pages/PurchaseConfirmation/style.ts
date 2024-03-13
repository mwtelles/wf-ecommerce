import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: 5vh 13vw;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5vh;
  height: 90vh;

  @media (max-width: 767px) {
    padding: 5vh 5vw;
  }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 20px;
    height: 90vh;
`;