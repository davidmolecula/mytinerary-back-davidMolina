import {Schema, model, Types} from 'mongoose'

let collection='cities';

let schema= new Schema({
    name: { type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    pais:{type:String, required:true},
    user: {type: Types.ObjectId, ref:'users'},
    itineraries:{type: Types.ObjectId, ref:'itineraries'}
},{
    timestamps: true
})

const City=model(collection,schema) 

export default City; 