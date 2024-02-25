import {mongooseConnect} from '@/lib/mongoose'
import {Product} from '@/models/product'
import { Order } from '../../models/order';


const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req,res){
    if(req.method !=='POST'){
        res.json('Should be a POST request')
        return;
    }
    const {name,email,phoneNumber,country,city,postalCode,town,street,apartment,products} = req.body
    // if(!name || !email || !phoneNumber || !country || !city || !postalCode || !town || !street || !apartment){
    //     res.json('Missing required fields')
    //     return;
    // }
    //res.json('Success')

    await mongooseConnect()

    const productIds = products.split(',')
    const uniqueIds = [...new Set(productIds)]
    const productInfos = await Product.find({_id:uniqueIds});
    
    let line_items = []
    for (const productId of uniqueIds){
        const product = productInfos.find(product => product._id == productId)
        const quantity = productIds.filter(id => id == productId).length
        
        if(quantity>0 && product){
            line_items.push({
                price_data: {
                    currency: 'PKR',
                    product_data: {
                    name: product.title,
                    
                    },
                    unit_amount: quantity*product.price*100,
                },
                quantity: quantity,
            })
        }
    }

    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        phoneNumber,
        country,
        city,
        postalCode,
        town,
        street,
        apartment,
        paid:false,

    })
    //res.json({line_items})

    const session = stripe.checkout.sessions.create({
        line_items,
        mode:'payment',
        customer_email:email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url:process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata:{orderId:orderDoc._id.toString()}

    })

    res.json({
        url:session.url,
    })

}