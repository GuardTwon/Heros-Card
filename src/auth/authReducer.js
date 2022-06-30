import { types } from "../types/types";



// const loginAction={

//     name:'Juan',
//     email:'jasdfas@sadaqs.com'
// }


export const authReducer= (state={},action)=>{

    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged:true
            }
        case types.logout:
            return{
                logged:false
            }
        default:
            return state; 
    }

}