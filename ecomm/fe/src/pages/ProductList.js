import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Container= styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 40px;
  font-weight: 500;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText= styled.span`
font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Option = styled.option``;

const Select = styled.select`
 padding: 10px;
  margin-right: 20px;
`;



const ProductList = () => {
  const location = useLocation();
  const cat=location.pathname.split("/")[2]
const [filters, setFilters] = useState({});
const [sort, setSort] = useState("newest");

const handleFilters =(e)=>{
  const value= e.target.value;
  setFilters({...filters, [e.target.name]: value})
}
console.log(filters);

const handleSort =(e)=>{
  const value=e.target.value;
  setSort(value);
}

console.log(sort)

  return (
    <Container>
        <Announcement>

        </Announcement>
        <Navbar>

        </Navbar>
        <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleFilters} name="color">
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={handleFilters} name="size">
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
<Products cat={cat} filters={filters} sort={sort}></Products>
<Footer></Footer>
    </Container>
  )
}

export default ProductList