import { RATING } from "../Const/actionTypes"

const initialState={starTab:[
    {
        id:1,
        icon:'★',
        isColored:false
    },{
        id:2,
        icon:'★',
        isColored:false
    },{
        id:3,
        icon:'★',
        isColored:false
    },{
        id:4,
        icon:'★',
        isColored:false
    },{
        id:5,
        icon:'★',
        isColored:false
    }
]}
const StarReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case RATING:
            return{...state,starTab:state.starTab.map((star)=>star.id===payload?{...star,isColored:!star.isColored}:star)}
            
    
        default:
            return state
          
    }
    
}

export default StarReducer
