import * as S from "./style";

const Loading = () => {
  return (
    <S.LoaderContainer>
       <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" color="#FFFFFF">
        <defs>
          <linearGradient id="secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g strokeWidth="8">
          <path stroke="url(#secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
          <path stroke="url(#firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
          <path stroke="currentColor" strokeLinecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
        </g>
      </S.Svg>
    </S.LoaderContainer>
  );
};

export default Loading;
