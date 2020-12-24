import { users } from '../../components/common/DataDump';

import { AUTHENTICATE_USER_ERROR,
         AUTHENTICATE_USER_SUCCESS,
         HIDE_AUTHENTICATION_LOADING,
         SHOW_AUTHENTICATION_LOADING,
         RESET_USER_STATUS,
         SIGNOUT_USER } from '../types/userTypes';

export const resetUserStatus = () => {
    return (dispatch) => {
        dispatch({ type: RESET_USER_STATUS });
    }
}

export const authenticateUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_AUTHENTICATION_LOADING });        
        if (users[user.loginId] === user.password) {
            // Ask user if he/she is okay to save local cookies then save the access_token to localStorage by 
            // JWT.set_jwt(response.data['access_token'], response.data['mobile'])
            dispatch({ type: HIDE_AUTHENTICATION_LOADING });
            dispatch({ type: AUTHENTICATE_USER_SUCCESS, response: { user: user.loginId } });
        }
        else {
            // Do this, JWT.remove_jwt(); if JWT.set_jwt() is done above
            dispatch({ type: HIDE_AUTHENTICATION_LOADING });
            dispatch({ type: AUTHENTICATE_USER_ERROR, error: { message: "Invalid username or password." } });
        }        
    }
}

export const signOutUser = (auth) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_AUTHENTICATION_LOADING });
        dispatch({ type: SIGNOUT_USER, auth });
        dispatch({ type: HIDE_AUTHENTICATION_LOADING });        
    }
}