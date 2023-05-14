import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Container= styled.div`
display: flex;
justify-content: space-between;
overflow-x: hidden;
height: 7vh;
`;

const Searchbar= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 25px;
border: 0.5px solid lightgray;
height: 2em;
margin-top: 8px;
border-radius: 10px;
`;

const SInput= styled.input`
padding: 3px;
width: 250px;
`;

const SIcon= styled.div`
color: grey;
width: 1px;
height: 1px;
padding: 3px;
display: flex;
margin: 12px;
justify-content: center;
align-items: center;
z-index: 2;
`;

const Logo = styled.h1`
font-size: 30px;
font-weight: 700;
justify-content: center;
align-items: center;
`;

const LSC= styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Login= styled.p`
margin: 5px;
padding: 2px;
cursor: pointer;
`;

const Signup= styled.p`
cursor: pointer;
margin: 5px;
padding: 2px;
`;

const Cart= styled.div`
margin: 5px;
padding: 2px;
`;

const Navbar = () => {
  return (
//     <div className=' h-14 py-2.5 px-5 flex space-x-[480px] text-sm cursor-pointer'>
  
//   <div className='border-solid border-gray-100 border-2 flex ml-6 p-3 h-8 justify-center items-center'> <SearchIcon style={{color:"gray", fontSize:16}}></SearchIcon><input className='h-4' placeholder='Search for products or brands '></input></div>
  
//    <p className='font-bold text-2xl'>SHOPPINGO</p>
//    <div className='flex space-x-4'><p>REGISTER</p>
//    <p>SIGN IN</p>
//    <p > <Badge badgeContent={4} color="primary">
//   <ShoppingCartOutlinedIcon color="action" />
// </Badge></p>
  
//    </div>
//     </div>
<Container>
  <Searchbar>
    <SIcon>
    <SearchIcon></SearchIcon>
    </SIcon>
    
    <SInput placeholder='search for products or brands'></SInput>
  </Searchbar>
    <Logo>
      SHOPPINGO
    </Logo>
    
    <LSC>
      <Link to="/login">
      <Login >
        LOG IN
      </Login>
      </Link>
      <Link to="/signup">
      <Signup>
        SIGN UP
      </Signup>
      </Link>
      <Link to="/cart">
      <Cart>
      <p > <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlinedIcon color="action" />
 </Badge></p>
      </Cart>
      </Link>
    </LSC>

</Container>
  )
}

export default Navbar