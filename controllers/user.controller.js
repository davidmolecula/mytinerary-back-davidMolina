import User from "../models/User.js";

const controller= {
    getUsers: (req,res)=>{
        res.json({
            user: 'David'
        });
    },
    createUsers: async(req,res)=>{
        try{const newUser=await User.create(req.body);
            
            return res.status(201).json({
                success:true,
                message:'User created'
            })} catch(error){
            console.log(error);
            res.status(500).json({
                success:false,
                message:'Error al crear la ciudad'
            })
        }
    },
    postUsers: ()=>{},
    deleteUsers:()=>{},
}

export default controller;