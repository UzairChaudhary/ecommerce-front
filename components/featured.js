import styled from "styled-components";
import Center from "./center";
import Button from "./button";
import Link from "next/link";
import CartIcon from './icons/CartIcon'

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
    
`;

const Title = styled.h1`
margin : 0 ;
font-weight: normal ;
font-size: 3rem;

`;

const Desc = styled.p`
color: #aaa;
font-size : .8rem;

`;

const ColumnWrapper = styled.div`
display: grid ;
grid-template-columns : 1.1fr 0.9fr;
gap: 40px;
img{
    max-width: 100%
}


`;

const Column = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`;

const ButtonWrapper = styled.div`
display: flex;
gap: 10px;
margin-top: 25px;
`;

export default function Featured ({product}){

    return(
        <Bg>
            <Center>
                <ColumnWrapper>
                    <Column>
                        <div>
                        <Title>{product.title}</Title>
                        <Desc>
                            {product.description}
                        </Desc>
                        <ButtonWrapper>

                            <Link href={'/products/'+ product._id}>
                                <Button outline={1} white={1} size="m"> Read more                           
                                </Button>
                            </Link>

                        
                            <Button white size="m">
                                <CartIcon /> 
                                Add to cart</Button>
                        
                        </ButtonWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={product.images[3]} alt="HP-PAVILLION-GAMING-15 LAPTOP" />
                    </Column>
                </ColumnWrapper>
            
            </Center>
        </Bg>
    )
  
}
 