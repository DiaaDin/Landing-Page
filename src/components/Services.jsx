import React from 'react'
import Black from '../images/icon-blacklist.svg'
import Preview from '../images/icon-preview.svg'
import Text from '../images/icon-text.svg'
import Google from '../images/logo-google.png'
import IBM from '../images/logo-ibm.png'
import Micro from '../images/logo-microsoft.png'
import Hewlett from '../images/logo-hp.png'
import Vector from '../images/logo-vector-graphics.png'
import styled from 'styled-components'

const ServicesSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 3.5rem;

`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
const ServicesContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
margin-bottom: 5rem;

`
const Service = styled.div`
margin: 0 auto;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 25%;
@media (max-width: 768px){
    width: 70%;

}
`
const Image = styled.img`
width: 3rem;
`

const Title = styled.h3`
color: #444444;
font-size: 1.6rem;
`

const Desc = styled.p`
color: #666666;
font-size: 1rem;
line-height: 2rem;
`

const Sponsers = styled.div`
width: 80% ;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin-bottom: 3.5rem;
@media (max-width: 768px){
    justify-content: center;

}
`

const Sponser = styled.img`
width: 12rem;
margin: 1rem;
`
const Clipboard = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
padding: .9rem 2rem;
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
padding: .9rem 2rem;
border-radius: 20px;
font-size: 1.3rem;
cursor: pointer;
transition: all .3s ease-in-out;
&:hover{
    opacity: .5;
}
`

const Services = () => {
    return (
        <ServicesSection>
            <Container>
            <Content>
                    <Heading>Supercharge your workflow</Heading>
                <Lead>We’ve got the tools to boost your productivity.</Lead>
                </Content>
                <ServicesContainer>
                <Service>
                        <Image src={Black}/>
                        <Title>Create blacklists</Title>
                        <Desc>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</Desc>
                    </Service>
                    <Service>
                        <Image src={Text}/>
                        <Title>Plain text snippets</Title>
                        <Desc>Remove unwanted formatting from copied text for a consistent look.</Desc>
                    </Service>
                    <Service>
                        <Image src={Preview}/>
                        <Title>Sneak preview</Title>
                        <Desc>Quick preview of all snippets on your Clipboard for easy access.</Desc>
                    </Service>
                </ServicesContainer>
                <Sponsers>
                <Sponser src={Google}/>
                <Sponser src={IBM}/>
                <Sponser src={Micro}/>
                <Sponser src={Hewlett}/>
                <Sponser src={Vector}/>
                </Sponsers>
            </Container>

            <Clipboard>
            <Content>
                <Heading>Clipboard for iOS and Mac OS</Heading>
                <Lead>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</Lead>
                </Content>
                <ButtonContainer>
                    <BtnP>Download For IOS</BtnP>
                    <BtnS>Download For Mac</BtnS>
                </ButtonContainer>

            </Clipboard>
            
        </ServicesSection>
    )
}

export default Services
