import {mongooseConnect} from "@/lib/mongoose"
import {Product} from "@/models/product"

export default async function handle(req,res){
    await mongooseConnect();
    const ids = req.body.ids
    //console.log(ids)
    res.json(await Product.find({_id:ids}))

}