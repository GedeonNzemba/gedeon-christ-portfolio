import React from 'react'
import styled from 'styled-components'

const CirclesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: #1a1a1a;
  padding: 20px; */
  width: 100%;
  /* min-height: 80px; */
`

const Circle = styled.div<{ opacity: number }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #b300ff;
  opacity: ${({ opacity }) => opacity};
  margin-right: 14px;

  &:last-child {
    margin-right: 0;
  }
`

export default function FadingCircle() {
  const calculateOpacity = (index: number) => {
    if (index < 6) return 1;
    const fadeStart = 6;
    const fadePerStep = 0.1;
    return Math.max(0, 1 - (index - fadeStart + 1) * fadePerStep);
  }

  return (
    <CirclesContainer>
      {[...Array(15)].map((_, index) => (
        <Circle key={index} opacity={calculateOpacity(index)} />
      ))}
    </CirclesContainer>
  )
}