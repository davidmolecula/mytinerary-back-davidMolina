import {Schema, model, Types} from 'mongoose'

let collection='cities';

let schema= new Schema({
    name: { type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    place:{type:String, required:true},
    user: {type: Types.ObjectId,ref:'users'}

},{
    timestamps: true
})

const City=model(collection,schema) 

export default City; 