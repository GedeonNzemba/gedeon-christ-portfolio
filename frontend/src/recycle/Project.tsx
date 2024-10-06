import React, { FC } from "react";
import styled, {css} from "styled-components";
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
    );
};

export default Project;

const ImageContainer = styled.div`
   width: 40rem;
   height: auto;
  display: block;
`;

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;

    ${$props => $props.direction &&
    css`
        flex-direction: row-reverse;
    `}

    ${$props => $props.shape &&
    css`
    height: 35rem;
        /* flex-direction: row-reverse; */
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
`;

const Info = styled.div<InfoProps>`
  position: absolute;
  top: 2rem;
  left: 5rem;

  ${$props => $props.position &&
    css`
    bottom: 2rem;
    top: unset;
    `}
`;
