import City from '../models/City.js'

const controller= {
    getCities:async (req,res) => {
        let queries={}
        console.log(req.query)
        if(req.query.name)
        {
            queries.name=new RegExp(`^${req.query.name}`, 'i')
        }
        if(req.query.description)
        {
            queries.description=req.query.description
        }
        try{
            const cities=await City.find(queries).populate('user')
            if(cities.length>0){
                return res.status(200).json({
                    success:true,
                    cities:cities
                })
            }
            return res.status(404).json({
                success:false,
                message:'Error al encontrar la ciudad'
            })
            
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener las ciudades'
            })
        }
        
        
    },
    getCityById: async(req,res)=>{
        try{
            const oneCity= await City.findById(req.params.id)

            if(oneCity){
                return res.status(200).json({
                    success:true,
                    city: oneCity
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro la ciudad'
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener la city'
            })
        }
    },
    createCity: async (req,res)=>{ 
        try{const newCity=await City.create(req.body);
            
            return res.status(201).json({
                success:true,
                message:'City created'
            })
        } catch (error){
            console.log(error)
            return res.status(500).json({
                success:false,
                message: "Error al crear la ciudad"
            })
        }
    }
        
}


export default controller;