import _ from 'lodash'
 const streams=(state={},action)=>{
   switch(action.type){
       case 'FETCH_STREAMS':
       return {
           ...state,
          ..._.mapKeys(action.payload,'id')
       }

       case 'FETCH_STREAM':
        return {...state,[action.payload.id]:action.payload}
   
       case 'CREATE_STREAM':
        return {...state,[action.payload.id]:action.payload}

        case 'UPDATE_STREAM':
        return {
            ...state,
            [action.payload.id]: action.payload
        }
        case 'DELETE_STREAM':
        return _.omit(state,action.payload)
       
        default:
            return state
   }
   
}
export default streams