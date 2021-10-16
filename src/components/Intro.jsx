import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import Bg from '../images/bg-header-desktop.png'


const IntroSection = styled.section`
width: 100%;
height: 70vh;
background-image: url(${Bg});
background-repeat: no-repeat;
@media (max-width: 768px){
    margin-bottom: 10rem;

}
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Image = styled.img`
width: 8rem;
height: 8rem;

@media (max-width: 768px){
    width: 6rem;
height: 6rem;

}

`
const Content = styled.div`
width: 45%;
text-align:center;
@media (max-width: 768px){
    width: 60%;


}
`

const Heading = styled.h2`
font-size: 3rem;
color: #444444;
font-weight: bold;

@media (max-width: 768px){
    font-size: 2rem;

}
`
const Lead = styled.p`
font-size: 1.2rem;
color: #666666;
margin-bottom: 3.5rem;
@media (max-width: 768px){
    font-size: 1rem;

}
`
const ButtonContainer = styled.div`
@media (max-width: 768px){
    display:flex;
    flex-direction: column;
    width: 50%;
}
`
const BtnP = styled.button`
color: #FFF;
border: none;
background-color: #26bba5;
padding: 1rem 2rem;
border-radius: 20px;
font-size: 1.3rem;
margin-right: 1rem;
transition: all .3s ease-in-out;
cursor: pointer;
&:hover{
    opacity: .5;
}

@media (max-width: 768px){
    margin-bottom: 1rem;
margin-right: 0;

}
`

const BtnS = styled.button`
color: #FFF;
border: none;
background-color: #6174ff;
padding: 1rem 2rem;
border-radius: 20px;
font-size: 1.3rem;
cursor: pointer;
transition: all .3s ease-in-out;
&:hover{
    opacity: .5;
}
`




const Intro = () => {
    return (
        <IntroSection>
            <Container>
                <Image src={Logo}/>
                <Content>
                    <Heading>A history of everything you copy</Heading>
                <Lead>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</Lead>
                </Content>
                
                <ButtonContainer>
                    <BtnP>Download For IOS</BtnP>
                    <BtnS>Download For Mac</BtnS>
                </ButtonContainer>

            </Container>
            
        </IntroSection>
    )
}

export default Intro
