import React from 'react';
import * as S from './style'

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (newQuantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ quantity, onIncrease, onDecrease, onChange }) => {
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      onIncrease();
    } else if (event.key === 'ArrowDown') {
      onDecrease();
    }
  };
  
  return (
    <S.QuantityContainer>
      <S.QuantityButton onClick={onDecrease}>-</S.QuantityButton>
      <S.QuantityDisplay
        type="number"
        value={quantity}
        onKeyDown={handleKeyDown}
      />
      <S.QuantityButton onClick={onIncrease}>+</S.QuantityButton>
    </S.QuantityContainer>
  );
};

export default QuantityInput;