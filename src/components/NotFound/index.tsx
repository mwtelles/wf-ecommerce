import * as S from "./style";

interface NotFoundProps {
    onReload: () => void;
    title: string;
    buttonText: string;
}

const NotFound = ({ onReload, title, buttonText }: NotFoundProps) => {
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
      <S.ReloadContainer>
        <S.ReloadImage />
      </S.ReloadContainer>
      <S.ReturnButton onClick={onReload}>
        {buttonText}
      </S.ReturnButton>
    </S.Container>
  );
};

export default NotFound;
