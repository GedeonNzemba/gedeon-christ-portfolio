import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Switch from '../../recycle/Switcher';

const DarkModeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DarkModeTextWrapper = styled.div`
  display: block;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
    margin-left: 1rem;
  }
`;

const DarkModeText = styled.h5<{ $active?: boolean }>`
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize;
  color: #ffffff;
  opacity: 0.5;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      font-weight: 500;
    `}
`;

// Toggle dark mode
// const handleToggle = (isOn: boolean) => {
//   console.log(`Switch is now ${isOn ? 'ON' : 'OFF'}`);
// };

const DarkMode = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <DarkModeContainer>
      <DarkModeTextWrapper>
        <DarkModeText style={{ opacity: isOn ? 0.5 : 1 }}>light</DarkModeText>
      </DarkModeTextWrapper>

      <Switch
        initialState={false}
        onToggle={setIsOn}
        width={46}
        height={20}
        borderColor="#b21eb2" // Purple border color
        activeBallColor="#b21eb2" // Purple color for active state
      />

      <DarkModeTextWrapper>
        <DarkModeText $active={isOn}>dark</DarkModeText>
      </DarkModeTextWrapper>
    </DarkModeContainer>
  );
};

export default DarkMode;
