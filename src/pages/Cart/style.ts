import styled from "styled-components";

const mobileBreakpoint = '768px';
const tabletBreakpoint = '1024px';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: 5vh 13vw;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5vh;
  height: 90vh;

  @media (max-width: ${tabletBreakpoint}) {
    padding: 5vh 5vw;
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding: 5vh 5vw;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  padding: 20px;
`;

export const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.background};

  @media (max-width: ${tabletBreakpoint}) {
    display: none;
  }

`;

export const HeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray};
    text-transform: uppercase;
`;

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px 0px;
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  width: 100%;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Total = styled.span`
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.tertiary};

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 26px;
    }
`;

export const CheckoutButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;