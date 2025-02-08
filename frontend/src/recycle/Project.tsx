import React, { FC } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import Heading from "./Heading";

type IProps = {
    image: string;
    projectName: string;
    date: string;
    left?: boolean;
    square?: boolean;
    largeSquare?: boolean;
    rectangle?: boolean;
};

type ContainerProps = {
    direction?: boolean;
    shape?: boolean;
}

type InfoProps = {
    position?: boolean;
}


const Project: FC<IProps> = ({ image, projectName, date, left, largeSquare }) => {
    return (
        <React.Fragment>
            {window.innerWidth <= 400 ? (

                <MobileContainer direction={left} shape={largeSquare}>
                    <MobileImageContainer>
                        <ProjectImage src={image} alt={projectName} />
                    </MobileImageContainer>

                    <MobileProjectInfo>
                        <MobileInfo position={left}>
                            <Heading title>{projectName}</Heading>
                            <Heading subtitle>{date}</Heading>
                        </MobileInfo>
                    </MobileProjectInfo>
                </MobileContainer>
            )
                :
                (
                    <Container direction={left} shape={largeSquare}>
                        <ImageContainer>
                            <ProjectImage src={image} alt={projectName} />
                        </ImageContainer>

                        <ProjectInfo>
                            <Info position={left}>
                                <Heading title>{projectName}</Heading>
                                <Heading subtitle>{date}</Heading>
                            </Info>
                        </ProjectInfo>
                    </Container>
                )}
        </React.Fragment>
    );
};

export default Project;

const ImageContainer = styled.div`
   width: 40rem;
   height: auto;
  display: block;

  @media (max-width: 599px) {
      width: clamp(12rem, 40vw, 24rem);
  }
`;

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;

  @media (max-width: 599px) {
      place-self: center;
      margin-bottom: 8rem;
  }

    ${$props => $props.direction &&
        css`
        flex-direction: row-reverse;
    `}

    ${$props => $props.shape &&
        css`
    height: 35rem;
        /* flex-direction: row-reverse; */

        @media (max-width: 599px) {
            height: auto;
        }
    `}
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const ProjectInfo = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 40rem;
  height: auto;

  @media (max-width: 599px) {
      width: 15rem;
  }
`;

const MobileContainer = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 3rem;

  ${props => props.direction &&
        css`
      flex-direction: row-reverse;
    `}

  ${props => props.shape &&
        css`
      height: auto;
    `}
`;

const MobileImageContainer = styled.div`
  width: 45%;
  height: auto;
  display: block;
`;

const MobileProjectInfo = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 55%;
  height: auto;
`;

const MobileInfo = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${props => props.position &&
        css`
      align-items: flex-end;
      text-align: right;
    `}
`;

const Info = styled.div<InfoProps>`
  position: absolute;
  top: 2rem;
  left: 5rem;

  ${$props => $props.position &&
        css`
    bottom: 2rem;
    top: unset;

      @media (max-width: 599px) {
      left: -2rem;
    }

    @media (max-width: 480px) {
      left: 2rem;
    }
    `}
`;
