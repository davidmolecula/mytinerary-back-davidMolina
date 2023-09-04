import Itinerary from '../models/Itinerary.js'

const controller= {
    getItineraries:async (req,res) => {
        let queries={}
        console.log(req.query)
        try{
            const itineraries=await Itinerary.find(queries).populate('cities')
            if(itineraries.length>0){
                return res.status(200).json({
                    success:true,
                    itineraries:itineraries
                })
            }else{
                
            }
            return res.status(404).json({
                success:false,
                message:'Error al encontrar la itinerary'
            })
            
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener las itineraries'
            })
        }
        
        
    },
    getItineraryById: async(req,res)=>{
        try{
            const oneItinerary= await Itinerary.findById(req.params.id)

            if(oneItinerary){
                return res.status(200).json({
                    success:true,
                    itinerary: oneItinerary
                })
            }
            return res.status(404).json({
                success:false,
                message:'No se encontro la itinerary'
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener la itinerary'
            })
        }
    },
    createItinerary: async (req,res)=>{ 
        try{const newItinerary=await Itinerary.create(req.body);
            
            return res.status(201).json({
                success:true,
                message:'itinerary created'
            })
        } catch (error){
            console.log(error)
            return res.status(500).json({
                success:false,
                message: "Error al crear la itinerary"
            })
        }
    },
    updateItinerary: async (req,res) =>{
        try{
            await Itinerary.updateOne({_id: req.params.id},req.body)
            return res.status(200).json({
                success:true,
                message:'La itinerary se actualizo con exito'
            })
        }catch(error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error al actualizar la itinerary'
            })
        }
    },
    deleteItinerary: async (req,res)=> {
        try{
            await Itinerary.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success:true,
                message:'La itinerary se elimino con exito'
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                success:false,
                message:'Error al eliminar la itinerary'
            })
        }
    }
        
}


export default controller;