import React from 'react'
import styled from 'styled-components'
import LapTop from '../images/image-computer.png'


const FeaturesSection = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Content = styled.div`
text-align: center;
width: 40%;

@media (max-width: 768px){
    width: 70%;
}

`

const Heading = styled.div`
font-size: 3rem;
color: #444444;
font-weight: bold;

@media (max-width: 768px){
    font-size: 2rem;

}
`
const HeadingLead = styled.p`
font-size: 1.2rem;
color: #666666;
margin-bottom: 5rem;
@media (max-width: 768px){
    font-size: 1rem;

}
`

const FeaturesContainer = styled.div`
display: flex;
justify-content: center;

@media (max-width: 768px){
    display: flex;
    align-items:center;
justify-content: center;
flex-direction: column;
}
`

const ImageContainer = styled.div`
width: 50%;
overflow: hidden;
margin-right: 5rem;
display: flex;
justify-content: center;
@media (max-width: 768px){
    width: 100%;
    margin:0;
    


}

`

const Image = styled.img`
width: 100%;
@media (max-width: 768px){
    width: 90%;
    margin:0;


}
`

const FeaturesText = styled.div`
width: 25%;
display: flex;
flex-direction: column;
justify-content: start;
margin-top: 3rem;
@media (max-width: 768px){
    width: 60%;
    text-align: center;

}

`

const Head = styled.h2`
font-size: 1.5rem;
color: #444444;
margin: 0;
@media (max-width: 768px){
    font-size: 1.3rem;
}
`

const Lead = styled.p`
font-size: 1.1rem;
line-height: 2rem;
color: #666666;
margin-bottom: 2rem;
@media (max-width: 768px){
    font-size: 1rem;
}
`


const Features = () => {
    return (
        <FeaturesSection>
            <Container>
                <Content>
                    <Heading>Keep track of your snippets</Heading>
                    <HeadingLead>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</HeadingLead>
                </Content>
                <FeaturesContainer>
                    <ImageContainer>
                    <Image src={LapTop}/>
                    </ImageContainer>
                    <FeaturesText>
                        <Head>Quick Search</Head>
                        <Lead>Easily search your snippets by content, category, web address, application, and more</Lead>
                        <Head>iCloud Sync</Head>
                        <Lead>Instantly saves and syncs snippets across all your devices.</Lead>
                        <Head>Complete History</Head>
                        <Lead>Retrieve any snippets from the first moment you started using the app.</Lead>
                    </FeaturesText>
                </FeaturesContainer>
            </Container>
            
        </FeaturesSection>
    )
}

export default Features
