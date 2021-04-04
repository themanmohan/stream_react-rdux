
import stream from '../apis/stream'
import history from '../history'
export const signIn = (userId) => {
    return{
        type:'SIGN_IN',
        payload: userId
    }
}

export const signOut = (userId) => {
    return {
        type: 'SIGN_OUT'
        
    }
}

export const createStream = formvalue =>async (dispatch,getState) => {
    const {userId}=getState().auth
  const response= await stream.post('/streams', {...formvalue,userId})
  dispatch({type:"CREATE_STREAM",payload:response.data})
  history.push('/')
}

export const fetchStreams=()=>async dispatch=>{
    const response = await stream.get('/streams')
    dispatch({
        type: "FETCH_STREAMS",
        payload: response.data
    })
}

export const fetchStream = (id) => async dispatch => {
    const response = await stream.get(`/streams/${id}`)
    dispatch({
        type: "FETCH_STREAM",
        payload: response.data
    })
}



export const updateStream = (id,formvalue) => async dispatch => {
    const response = await stream.patch(`/streams/${id}`,formvalue)
    dispatch({
        type: "UPDATE_STREAMS",
        payload: response.data
    })
    history.push('/')
}

export const deleteStream = (id) => async dispatch => {
     await stream.delete(`/streams/${id}`)
    dispatch({
        type: "DELETE_STREAMS",
        payload:id
    })
    history.push("/")
}
