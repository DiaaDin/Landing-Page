import React from 'react'
import styled from 'styled-components'
import Res from '../images/image-devices.png'

const ResponsiveSection = styled.section`
width: 100%;
height: auto;
margin-top: 5rem;

@media (max-width: 768px){
    margin-top: 10rem;
}
`
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
const Image = styled.img`
width: 65%;

@media (max-width: 768px){
    width: 80%;


}
`






const Responsive = () => {
    return (
        <ResponsiveSection>
            <Container>
                <Content>
                    <Heading>Access Clipboard anywhere</Heading>
                    <HeadingLead>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks</HeadingLead>
                </Content>
                <Image src={Res}/>
            </Container>
            
        </ResponsiveSection>
    )
}

export default Responsive
