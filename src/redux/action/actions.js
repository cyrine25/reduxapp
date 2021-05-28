import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, RATING } from "../Const/actionTypes"
//payload Movie Object :{Title id img text rating}
export const Add=(payload)=>{
    return {
        type:ADD_MOVIE,
        payload
    }
};
//payload :{id}
export const Delete=(payload)=>{
    return {
        type:DELETE_MOVIE,payload
    }
};
//payload: id,modification
export const Edit=(payload)=>{
    return{
        type:EDIT_MOVIE,payload
    }
};
//payload:{id}
export const Rating=(payload)=>{
    return {
        type:RATING,payload
    }
} 

