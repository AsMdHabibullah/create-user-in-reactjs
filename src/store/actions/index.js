import apis from '../api';
import actionTypes from './actionTypes'

export const adminLoginAction = () => async dispatch => {
    const response = await apis.get("admin/login");
    dispatch({ type: actionTypes.ADMIN_LOGIN, paylode: response.data });
};


export const userLoginAction = () => async dispatch => {
    const response = await apis.get("user/login");
    dispatch({ type: actionTypes.ADMIN_LOGIN, paylode: response.data });
};

export const userRegisterAction = () => async dispatch => {
    const response = await apis.get("user/register");
    dispatch({ type: actionTypes.ADMIN_LOGIN, paylode: response.data });
};