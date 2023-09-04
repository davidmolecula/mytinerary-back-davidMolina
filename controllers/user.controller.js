import User from "../models/User.js";

const controller= {
    getUsers: (req,res)=>{
        
        console.log(req.query)
        try{
            
                const users=User.find(queries).populate('name')
                return res.status(200).json({
                    success:true,
                    users:users
                }
                )
            
            return res.status(404).json({
                success:false,
                message:'Error al encontrar el user'
            })
            
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el user'
            })
        }
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