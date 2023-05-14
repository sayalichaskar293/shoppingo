import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Container =styled.div`
display: flex;
`;

const Left =styled.div`
flex: 1;
display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo= styled.h1`
font-weight: 700;
`;

const Desc = styled.p`
 margin: 20px 0px;`;

const Centre =styled.div``;

const Title = styled.h3`
margin-top: 2px;
 margin-bottom: 30px;
 font-weight: 700;
`;

const Right =styled.div`
  flex: 1;
  padding: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
 width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem= styled.li`
 width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPPINGO</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem voluptatibus quibusdam! Dolorem quod deleniti esse tempore dolore officiis, quae assumenda modi facilis ab, sint, saepe quaerat! Maxime, est in.</Desc>
        <SocialContainer>
            <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
            </SocialIcon>
            <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
            </SocialIcon>
            <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
            </SocialIcon>
            <SocialIcon color="E60023">
            <PinterestIcon></PinterestIcon>
            </SocialIcon>
                
            </SocialContainer>
            
        </Left>
        <Centre>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Centre>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
         <LocationOnIcon></LocationOnIcon>  622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
           <LocalPhoneIcon></LocalPhoneIcon>+1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailIcon></MailIcon> contact@shoppingo.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            
        </Right>
    </Container>
  )
}

export default Footer