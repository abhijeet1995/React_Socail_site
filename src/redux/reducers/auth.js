import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED,AUTH_ERROR,CLEAR_PROFILE,LOADER_SPIN, DELETE_ACCOUNT } from "../actions/type";

const initialState = {
	token:localStorage.getItem('token'),
	isAuthenticated:null,
	loading:true,
	user:null


}



export default function(state=initialState,action){
	
	const {type ,payload} = action
	switch(type){
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: payload,
				loading: false
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:	
			localStorage.setItem('token',payload.token)
			localStorage.setItem('auth', true);
			return {
				...state,
				...payload,
				isAuthenticated:true,
				loading:false
			}
		case LOADER_SPIN:
			return {
				loading: true
			} 
		case REGISTER_FAILURE:
		case AUTH_ERROR:
		case LOGIN_FAILURE:	
		case LOGOUT:
		case DELETE_ACCOUNT:
			localStorage.removeItem('token');
			localStorage.removeItem('auth');
			return{
				...state,
				token:null,
				loading:false,
				isAuthenticated:false,
				user:null
			}
			default:
				return state
			
	}
}

