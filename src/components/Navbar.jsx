import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:: center; 
`
const Right = styled.div`
flex:1;
display : flex ;
align-items = center ;
justify-content : flex-end; 
`
const MenuItem = styled.div`
font-size: 14px ;
cursor : pointer ;
margin-left: 25px ; 
`


const Language =styled.span`
font-size:14px;
cursor:pointer;
`

const SearchContainer = styled.div`
border: .5 px solid lightgrey ;
display : flex ;
align-items: center ;
margin-left:25px;
padding: 5px ;
`

const Input = styled.input`
 border : none ;
`

const Logo = styled.h1`
font-weight:bold;
`

const Navbar = () => {

  
  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color:"gray" , fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
              <Badge overlap="rectangular" badgeContent={4} color="secondary">
             <ShoppingCartOutlined/>
              </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar