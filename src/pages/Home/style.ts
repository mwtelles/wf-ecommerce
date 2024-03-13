import styled from 'styled-components';
import Cart from '../../assets/icons/Cart.svg'
import Logo from '../../assets/images/logo.svg'

const mobileBreakpoint = '768px';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  padding: 5vh 13vw;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  height: 100%;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 5vh 5vw;
  }
`;

export const NoContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 20px;
    height: 100%;
`;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 100%;
`;