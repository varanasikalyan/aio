import { AUTHENTICATE_USER_SUCCESS, 
         AUTHENTICATE_USER_ERROR,
         RESET_USER_STATUS,
         SIGNOUT_USER, 
         HIDE_AUTHENTICATION_LOADING,
         SHOW_AUTHENTICATION_LOADING } from '../types/userTypes';
        
const initState = {
    response: null,
    status: '',    
    logged_user: null,    
    loading: false
}

const userReducer = (state = initState, action) => {
    let response = null;
    switch(action.type) {
        case SIGNOUT_USER:
            return {
                ...state,
                response: null,                
                logged_user: null,
                status: SIGNOUT_USER,
                loading: false
            }       
        case AUTHENTICATE_USER_SUCCESS:            
            return {
                ...state,                
                response: action.response,
                logged_user: action.response.user,
                status: AUTHENTICATE_USER_SUCCESS,
                loading: false
            }
        case AUTHENTICATE_USER_ERROR:
            if (action.error.response !== undefined && action.error.response.message !== undefined)
                response = action.error.response;
            else
                response = action.error;
            return {
                ...state,
                response: response,
                logged_user: null,
                status: AUTHENTICATE_USER_ERROR,
                loading: false
            } 
        case RESET_USER_STATUS:
            return {
                ...state,
                response: null,
                status: RESET_USER_STATUS,
                loading: false
            }
        case SHOW_AUTHENTICATION_LOADING:
            return {
                ...state,
                response: null,
                status: SHOW_AUTHENTICATION_LOADING,                
                loading: true
            }
        case HIDE_AUTHENTICATION_LOADING:
            return {
                ...state,
                response: null,
                status: HIDE_AUTHENTICATION_LOADING,                
                loading: false
            }           
        default:
            return state;
    }
}

export default userReducer;
