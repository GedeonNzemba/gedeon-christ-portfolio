import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import Heading from '../../recycle/Heading'
import Button from '../../recycle/Button'

const FormContainer = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 10px;
  width: 90%;
  max-width: 1200px;
  margin: clamp(5rem, 8vw, 10rem) auto 0;
  position: relative;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #fff;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: clamp(3rem, 5vw, 6rem) auto 0;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Label = styled.label`
  margin-left: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: clamp(0.3rem, 1vw, 0.5rem);
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
`

const Input = styled.input`
  padding: clamp(0.8rem, 1.5vw, 1.2rem) clamp(1rem, 2vw, 2rem);
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: 10rem;
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  border: none;
  background-color: rgba(178, 30, 178, 0.18);
  color: white;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: rgba(178, 30, 178, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const TextArea = styled.textarea`
  padding: clamp(0.8rem, 1.5vw, 1.2rem) clamp(1rem, 2vw, 2rem);
  margin-bottom: clamp(2rem, 3vw, 3rem);
  border-radius: clamp(0.8rem, 1.5vw, 1.2rem);
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  border: none;
  background-color: rgba(178, 30, 178, 0.18);
  color: white;
  min-height: clamp(80px, 15vw, 100px);
  width: 100%;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: rgba(178, 30, 178, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Graphic = styled.img<{flash?: boolean; path?: boolean; bluredHalfCircle?: boolean; halfCircle?: boolean}>`
  position: absolute;
  z-index: 999;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    opacity: 0.5;
  }

  ${$props => $props.flash && 
  css`
    bottom: 25%;
    right: 15%;
    width: clamp(6rem, 12vw, 10rem);

    @media (max-width: 768px) {
      right: 10%;
      bottom: 20%;
    }

    @media (max-width: 480px) {
      right: 5%;
      bottom: 15%;
    }
  `}

  ${$props => $props.path && 
  css`
    bottom: 25%;
    right: 5%;
    width: clamp(4rem, 8vw, 6rem);

    @media (max-width: 768px) {
      right: 2%;
      bottom: 20%;
    }

    @media (max-width: 480px) {
      right: 0;
      bottom: 15%;
    }
  `}

  ${$props => $props.bluredHalfCircle && 
  css`
    bottom: 5rem;
    left: 0;
    width: clamp(15%, 18vw, 18%);

    @media (max-width: 768px) {
      bottom: 3rem;
    }

    @media (max-width: 480px) {
      bottom: 2rem;
    }
  `}

  ${$props => $props.halfCircle && 
  css`
    bottom: 25%;
    left: 0;
    width: clamp(6rem, 12vw, 10rem);

    @media (max-width: 768px) {
      bottom: 20%;
    }

    @media (max-width: 480px) {
      bottom: 15%;
    }
  `}
`

interface FormData {
    fullName: string
    email: string
    message: string
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you would typically send the form data to a server
    }

    return (
        <FormContainer id="contact">
            <Heading header marginBottom>Contact me</Heading>
            {/* <Graphic bluredHalfCircle src={require('../../assets/contact_us_blurred_path.png')} alt="graphic" />
            <Graphic halfCircle src={require('../../assets/contact_us_path.png')} alt="graphic" /> */}

            <Graphic path src={require('../../assets/path_b.png')} alt="graphic" />
            <Graphic flash src={require('../../assets/contact_us_right_arrow.png')} alt="graphic" />
            <StyledForm onSubmit={handleSubmit}>
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name ..."
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="email">Email *</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email ..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="message">Message *</Label>
                <TextArea
                    id="message"
                    name="message"
                    placeholder="Enter your message ..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <Button
                    backgroundColor="#b21eb2"
                    padding
                    textColor="rgb(255, 255, 255)"
                    hoverBackgroundColor="#b21eb2"
                    hoverTextColor="rgba(255, 255, 255, 0.699)"
                    fontFamily="Source Code Pro, monospace"
                    fontWeight="bold"
                    round
                    onClick={() => alert('Button clicked!')}
                    alignSelf='center'
                    type='submit'
                >
                    submit
                </Button>
            </StyledForm>
        </FormContainer>
    )
}

export default Contact