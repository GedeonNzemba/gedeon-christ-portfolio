import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import Heading from '../../recycle/Heading'
import Button from '../../recycle/Button'

const FormContainer = styled.div`
  /* background: linear-gradient(135deg, #2d1f3d 0%, #1a1625 100%); */
  padding: 2rem;
  border-radius: 10px;
  max-width: 100%;
  margin: 10rem auto 0 auto;
  position: relative;
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
  margin: 6rem auto 0 auto;
  max-width: 50rem;
`

const Label = styled.label`
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #fff;
`

const Input = styled.input`
  padding: 1.2rem 2rem;
  margin-bottom: 2.5rem;
  border-radius: 10rem;
  font-size: 0.9rem;
  border: none;
  background-color: rgba(178, 30, 178, 0.18);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const TextArea = styled.textarea`
  padding: 1.2rem 2rem;
  margin-bottom: 3rem;
  border-radius: 1.2rem;
  font-size: 0.9rem;
  border: none;
  background-color: rgba(178, 30, 178, 0.18);
  color: white;
  min-height: 100px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Graphic = styled.img<{flash?: boolean; path?: boolean; bluredHalfCircle?: boolean; halfCircle?: boolean}>`
position: absolute;
 z-index: 999;

 ${$props => $props.flash && 
 css`
      bottom: 25%;
      right: 15%;
      width: 10rem;
 `}

 ${$props => $props.path && 
 css`
      bottom: 25%;
      right: 5%;
      width: 6rem;
 `}

 ${$props => $props.bluredHalfCircle && 
 css`
      bottom: 5rem;
      left: 0;
      width: 18%;
 `}

 ${$props => $props.halfCircle && 
 css`
      bottom: 25%;
      left: 0;
      width: 10rem;
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
        <FormContainer>
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