import React from 'react'
import Header from '@/components/header'
import Featured from '@/components/featured'
import NewProducts from '@/components/newProducts'
import {Product} from "@/models/product"
import {mongooseConnect} from "@/lib/mongoose"
export default function Home({featuredProduct,newProducts}) {
  // console.log(featuredProduct)
  // console.log(newProducts)
  return(
    <React.Fragment>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts product={newProducts} />
    </React.Fragment>
  )
}

export async function getServerSideProps(){
  const featuredProductId = "64e0b56f6ce9a7851c0b13f4";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {sort:{'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    } 
    };
  
}
