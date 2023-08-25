import { Image } from "antd";
import styled from "styled-components"
import Button from "./button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const WhiteBox =styled(Link)`
background-color: #fff;
padding: 20px;
height: 120px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
img{
    max-width: 100%;
    max-height: 100px;
}
`;

const ProductWrapper = styled.div`
`;

const Title = styled(Link)`
font-weight: normal;
font-size: 0.9rem;
margin: 0;
text-decoration: none;
color: inherit;

`;

const ProductInfoBox = styled.div`
padding-top: 10px;

`;

const PriceRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 5px;
padding-top: 5px;
`;

const Price = styled.div`
font-size: 1rem;
font-weight: bold;
`;

export default function ProductBox({_id,title,description,price,images}){
    const {addProduct} = useContext(CartContext)
    
    const url = '/product/'+_id ;
    return(
        <ProductWrapper>
            <WhiteBox href={url}>
                    <div>
                        
                        <img src={images[0]} alt="product image"  />

                    </div>
            </WhiteBox>
        <ProductInfoBox>
            <Title  href={url}>{title}</Title>
            <PriceRow>
                <Price>
                    Rs.{price} 
                </Price>
                <Button primary outline size="s" onClick={()=>addProduct(_id)}>
                    
                    Add to cart
                </Button>
            </PriceRow>
            
            
        </ProductInfoBox>
        </ProductWrapper>
    )
  
}
