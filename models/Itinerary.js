import {Schema, model, Types} from 'mongoose';

const collection='itineraries'

const schema=new Schema({
    price:{type:Number, required:true},
    duration:{type:Number},
    likes:{type:Number},
    hashtags:[{type:String}],
    comments:{type:String},
    cities:{type:Types.ObjectId, ref:'cities'},
})


const Itinerary=model(collection,schema) 

export default Itinerary; 