import {Schema, model, Types, isObjectIdOrHexString} from 'mongoose';

const collection= 'users';


const schema=new Schema({
    name: {type:String, required:true},
    image:{type:String},
    cities:{type:Types.ObjectId,ref:'users'}
},{
    timestamps:true
});

const User=model(collection,schema);

export default User;