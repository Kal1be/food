import { constants } from "../constants.js";

const errorHandler =(err,req,res,next)=>{
    const status = res.statusCode?res.statusCode:500
    switch (status) {
        case constants.Forbidden:
         res.json({title:"Forbidden",message:err.message,stackTrace:err.stack})
       case constants.Not_Found:
         res.json({title:"Not_Found",message:err.message,stackTrace:err.stack})
    case constants.Server_Err:
       res.json({title:"Server_Err",message:err.message,stackTrace:err.stack})
 case constants.Unauthorized:
       res.json({title:"Unauthorized",message:err.message,stackTrace:err.stack})
      case constants.Verification_Err:
        res.json({title:"Verification_Err",message:err.message,stackTrace:err.stack})
                    
        default:
            console.log("no error,All fine")
            break;
    }
}

export default errorHandler

