import { styled } from "styled-components";
import Trash from "../../assets/icons/trash.svg";

export const GridContainer = styled.div``;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 2fr;
  }
`;

export const HeaderItem = styled.div`
  font-weight: bold;
  text-align: left;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
  font-size: 18px;

  &:nth-child(3) {
    text-align: center;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  padding: 8px;
  margin: 5px 0;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const MovieRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

export const MovieColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ProductImage = styled.img`
  width: 110px;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 90px;
    margin-right: 0px;
  }
`;

export const ItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 767px) {
    width: 120px;
  }
`;

export const ProductName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const ProductSubtotal = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  text-transform: uppercase;
`;


export const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.tertiary};

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
export const Subtotal = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.tertiary};
  text-align: center;
`;
export const Action = styled.div`
  text-align: right;
`;

export const TrashIcon = styled.img.attrs({
  src: Trash,
})`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    filter: invert(0.5);
  }
  &:active {
    filter: invert(0.2);
  }
`;
