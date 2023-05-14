import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
flex: 1;
margin: 3px;
position: relative;
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Image= styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Title = styled.h1`
color: white;
font-size: 30px;
font-weight: 700;
margin-bottom: 20px;
`;

const Button= styled.button`
background-color: white;
padding: 10px;
border: none;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`productlist/${item.cat}`}>
<Image src={item.img}/>
<Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
</Info>
</Link>
    </Container>
  )
}

export default CategoryItem