import React from 'react';
import styled from 'styled-components'
import '../../App.css';

type WholeNumbersZeroToEleven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface IProps {
  iterate: WholeNumbersZeroToEleven;
}

export function isWholeNumberZeroToEleven(value: number): value is WholeNumbersZeroToEleven {
  return Number.isInteger(value) && value >= 0 && value <= 11;
}

const Indicator: React.FC<IProps> = ({iterate}) => {

  const SolidCircle = styled.div`
    background-color: rgb(178, 30, 178);
    opacity: 1;
    border: unset;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  `
  const LightCircle = styled.div`
    background-color: rgb(178, 30, 178);
    border: unset;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    opacity: 0.149;
     margin-right: 0.5rem;

  `
  const Circle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `


    return (
        <React.Fragment>
          {iterate === 0 && (
              <Circle>
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

           {iterate === 1 && (
              <Circle>
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

          {iterate === 2 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

          {iterate === 3 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

          {iterate === 4 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 5 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 6 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 7 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 8 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 9 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 10 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <LightCircle />
              </Circle>
            ) }

            {iterate === 11 && (
              <Circle>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
              </Circle>
            ) }
        </React.Fragment>
    );
}

export default Indicator;
