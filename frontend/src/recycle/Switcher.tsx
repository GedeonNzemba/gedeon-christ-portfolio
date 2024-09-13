import React, { useState } from 'react';
import styled from 'styled-components';

interface SwitchProps {
  initialState?: boolean;
  onToggle?: (isOn: boolean) => void;
  width?: number;
  height?: number;
  borderColor?: string;
  activeBallColor?: string;
}

const SwitchContainer = styled.label<{ width: number; height: number }>`
  display: inline-block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{
  isOn: boolean;
  width: number;
  height: number;
  borderColor: string;
  activeBallColor: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: 0.4s;
  border-radius: ${props => props.height}px;
  border: 1.5px solid ${props => props.borderColor};

  &:before {
    content: '';
    position: absolute;
    height: ${props => props.height - 8}px;
    width: ${props => props.height - 8}px;
    left: 4px;
    bottom: 3px;
    background-color: ${props => (props.isOn ? props.activeBallColor : 'white')};
    transition: 0.4s;
    border-radius: 50%;
    transform: ${props => (props.isOn ? `translateX(${props.width - props.height}px)` : 'translateX(0)')};
  }
`;

const Switch: React.FC<SwitchProps> = ({
  initialState = false,
  onToggle,
  width = 60,
  height = 34,
  borderColor = '#b21eb2',
  activeBallColor = '#b21eb2'
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <SwitchContainer width={width} height={height}>
      <SwitchInput type="checkbox" checked={isOn} onChange={handleToggle} />
      <Slider
        isOn={isOn}
        width={width}
        height={height}
        borderColor={borderColor}
        activeBallColor={activeBallColor}
      />
    </SwitchContainer>
  );
};

export default Switch;
