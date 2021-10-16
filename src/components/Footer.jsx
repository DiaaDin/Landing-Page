import React from 'react'
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import styled from 'styled-components'
import LogoImg from '../images/logo.svg'

const FooterSection = styled.section`
width: 100%;
height: 10rem;
background-color: #f5f6f8;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`
const LogoContainer = styled.div`
width: 10%;
@media (max-width: 768px){
 width: 20%;

}
`

const Logo = styled.img`
width: 4rem;
@media (max-width: 768px){
 width: 3rem;

}
`

const LinksContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 40%;
@media (max-width: 768px){
 width: 60%;

}
`

const Link = styled.li`
list-style: none;
margin: 1rem 4rem 1rem 0;
font-size: 1.2rem;
cursor: pointer;
@media (max-width: 768px){
margin: 0 1.5rem .5rem 1rem;
font-size: 1rem;

}
`

const SocialContainer = styled.div`
width: 30%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px){
 width: 20%;

}
`

const FaceBook = styled(AiFillFacebook)`
font-size: 2rem;
cursor: pointer;
margin-right: 1rem;
@media (max-width: 768px){
font-size: 2.5rem;
}
`

const Twitter = styled(AiOutlineTwitter)`
font-size: 2rem;
cursor: pointer;
margin-right: 1rem;
@media (max-width: 768px){
font-size: 2.5rem;
}
`

const Instagram = styled(AiOutlineInstagram)`
font-size: 2rem;
cursor: pointer;
@media (max-width: 768px){
font-size: 2.5rem;
}
`



const Footer = () => {
    return (
        <FooterSection>
            <Container>

            <LogoContainer>
                <Logo src={LogoImg}/>
            </LogoContainer>
            <LinksContainer>
            <Link>FAQs</Link>
            <Link>Privacy policy</Link>
            <Link>Install Guide</Link>
            <Link>Contant Us</Link>
            <Link>Press Kit</Link>
            </LinksContainer>
            <SocialContainer>
                <FaceBook/>
                <Twitter/>
                <Instagram/>
            </SocialContainer>
            </Container>
            
        </FooterSection>
    )
}

export default Footer
