import Link from "next/link";
import styled from 'styled-components'
import Center from '@/components/center'
const StyledHeader = styled.header`
    background-color: #222
    `;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding : 20px 0 ;
`;

const NavLink = styled(Link)`
color: #aaa;
text-decoration: none;
margin-left: 20px;





`;

export default function Header (){

    

    return (
        <StyledHeader>
            <Center>
            <Wrapper>
            <Logo href={'/'}>Ecommerce</Logo>
            <nav>
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/cart'}>Cart (0)</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                
            </nav>
            </Wrapper>
            </Center>
        </StyledHeader>
    )
  
}