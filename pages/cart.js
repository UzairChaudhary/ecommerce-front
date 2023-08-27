import styled from 'styled-components'
import Header from '../components/header'
import Center from '../components/center'
import Button from '../components/button'
import { useContext, useEffect,useState } from 'react';
import {CartContext} from '../components/CartContext'
import axios from 'axios';
import Table from '../components/table';
import { Image } from 'antd';
import Input from '../components/input';


const ColumnWrapper = styled.div
`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap:40px;
    margin-top: 40px

`;

const Box = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    `;

const ProductInfoCell = styled.td`
padding: 10px 0px;
`;

const ProductImageBox = styled.div`

    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    Image{
    max-width: 80px;
    max-height: 80px;
    

}

`;

const QuantityLabel = styled.span`
padding: 0px 10px;
`;
const CityHolder = styled.div`
display:flex;
gap: 5px;
`;

export default function CartPage(){
    const {cartProducts, addProduct,removeProduct} = useContext(CartContext)
    const [products, setproducts] = useState([]);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [country, setcountry] = useState('');
    const [city, setcity] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [town, settown] = useState('');
    const [street, setstreet] = useState('');
    const [apartment, setapartment] = useState('');
    const [phoneNumber, setphonenumber] = useState('');



    useEffect(() => {
        if (cartProducts !== undefined && cartProducts.length > 0){
            console.log("Cart Porducts IDs before Axios")
            //console.log(cartProducts)
            axios.post('/api/cart',{ids:cartProducts}).then(response=>{
                //console.log("Server Response")
                //console.log(response.data)
                setproducts(response.data)
            })
           

        }
        else{
            setproducts([])
        }
            
    }, [cartProducts]);

    const incrementQuantity = (id) => {
           addProduct(id)
    }

    const decrementQuantity = (id) => {
        removeProduct(id)
 }
    let total = 0
    for (const productId of cartProducts){
        const price = products.find(p => p._id === productId)?.price || 0
        total+=price
    }



  return(
    <div>
        <Header />
        <Center>
        <ColumnWrapper>
            <Box>
                <h2>Cart</h2>
                {!cartProducts?.length && (
                    <p>No items in cart</p>
                )}
                <Table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products?.length >0 && (
                        <>
                            {products.map(product=>(
                                <tr key={product._id}>
                                    <ProductInfoCell> 
                                        <ProductImageBox>

                                        <Image src={product.images[0]} alt='product'></Image>

                                        </ProductImageBox>
                                        {product.title}
                                    </ProductInfoCell>
                                    
                                    <td>
                                        <Button onClick={()=>decrementQuantity(product._id)} size="s">-</Button>
                                        <QuantityLabel>
                                        {cartProducts.filter(id=> id===product._id).length}

                                        </QuantityLabel>
                                        <Button onClick={()=>incrementQuantity(product._id)} size="s" >+</Button>
                                    </td> 
                                    <td>Rs.{cartProducts.filter(id=> id===product._id).length*product.price}</td>   
                                </tr>
                            ))}
                        </>
                    )}
                    <tr>
                        <td>Grand Total</td>
                        <td></td>
                        <td>Rs.{total}</td>
                    </tr>
                    </tbody>
                </Table>

                


            </Box>

            {!!cartProducts?.length && (
                <Box>
                    <h2>Order Information</h2>
                    <form method='post' action="/api/checkout">
                    <Input type= "text" placeholder="Name" value={name} name={name} onChange={e=>setname(e.target.value)}/>
                    <Input type= "text" placeholder="Email" value={email} name={email} onChange={e=>setemail(e.target.value)}/>
                    <Input type= "text" placeholder="Phone Number" value={phoneNumber} name={phoneNumber} onChange={e=>setphonenumber(e.target.value)}/>
                    <Input type= "text" placeholder="Country" value={country} name={country} onChange={e=>setcountry(e.target.value)}/>
                    <CityHolder>
                    <Input type= "text" placeholder="City" value={city} name={city} onChange={e=>setcity(e.target.value)}/>
                    <Input type= "text" placeholder="Postal Code" value={postalCode} name={postalCode} onChange={e=>setpostalCode(e.target.value)}/>
                    </CityHolder>
                    <Input type= "text" placeholder="Town" value={town} name={town} onChange={e=>settown(e.target.value)}/>
                    <Input type= "text" placeholder="Street" value={street} name={street} onChange={e=>setstreet(e.target.value)}/>
                    <Input type= "text" placeholder="Apartment / Building" value={apartment} name={apartment} onChange={e=>setapartment(e.target.value)}/>
                    
                    <Button black size="m" block type="submit">Continue to payment</Button>

                    </form>
                </Box>   
            )}

            
        </ColumnWrapper>
        </Center>
        
    </div>
  )
}
