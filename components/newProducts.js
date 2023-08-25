import styled from "styled-components"
import Center from "./center";
import ProductBox from "./productBox";

const ProductGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px;

`;

const Title = styled.h2`
font-size:2rem;
margin: 30px 0 20px;
font-weight: normal;
`;


export default function NewProducts({product}){
    return(
        <Center>
            <Title>New Arrivals</Title>
            <ProductGrid>
            {product?.length>0 && product.map(product => (
                // eslint-disable-next-line react/jsx-key
                <ProductBox {...product}/>
            ))}
        </ProductGrid>
        </Center>
    )
}