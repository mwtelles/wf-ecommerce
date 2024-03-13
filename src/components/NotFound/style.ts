import styled from 'styled-components';
import Reload from '../../assets/images/reload.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const ReloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  width: 400px;

  @media (max-width: 767px) {
    width: 300px;
  }
`;

export const ReloadImage = styled.img.attrs({
  src: Reload
})`
  height: 340px;
`;

export const ReturnButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};

  @media (max-width: 767px) {
    font-size: 22px;
    width: 200px;
    text-align: center;
  }
`;