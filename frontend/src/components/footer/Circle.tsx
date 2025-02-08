import React from 'react'
import styled from 'styled-components'

const CirclesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }

  @media (max-width: 360px) {
    max-width: 250px;
  }
`

const Circle = styled.div<{ opacity: number }>`
  width: clamp(8px, 1.5vw, 16px);
  height: clamp(8px, 1.5vw, 16px);
  border-radius: 50%;
  background-color: #b300ff;
  opacity: ${({ opacity }) => opacity};
  margin-right: clamp(8px, 1.2vw, 14px);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: clamp(6px, 1.2vw, 12px);
    height: clamp(6px, 1.2vw, 12px);
    margin-right: clamp(6px, 1vw, 10px);
  }

  @media (max-width: 480px) {
    width: clamp(4px, 1vw, 8px);
    height: clamp(4px, 1vw, 8px);
    margin-right: clamp(4px, 0.8vw, 8px);
  }

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

  const circleCount = window.innerWidth <= 480 ? 10 : window.innerWidth <= 768 ? 12 : 15;

  return (
    <CirclesContainer>
      {[...Array(circleCount)].map((_, index) => (
        <Circle key={index} opacity={calculateOpacity(index)} />
      ))}
    </CirclesContainer>
  )
}