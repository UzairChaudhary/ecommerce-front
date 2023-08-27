import { Schema,models,model } from "mongoose";

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    email:String,
    phoneNumber:String,
    country:String,
    city:String,
    postalCode:String,
    town:String,
    street:String,
    apartment:String,
    paid:Boolean
})

export const Order = models.Order || model('Order',OrderSchema)