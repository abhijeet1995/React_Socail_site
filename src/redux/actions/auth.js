import axios from 'axios'
import {
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	USER_LOADED,
	CLEAR_PROFILE,
	AUTH_ERROR,
	LOADER,
	REMOVE_ALERT,
} from './type';
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken';
import {envData} from '../../config/config'

//Load user

export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	try {
		// http://localhost:8080/api/auth
		const res = await axios.get(`${envData.REACT_APP_API_URL}/auth`);
		dispatch({
			type: USER_LOADED,
			payload: res.data
		})
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		})
	}
}




//Register User

export const register = ({ name, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	localStorage.clear();
	const body = JSON.stringify({ name, email, password })
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/users`, body, config);
		console.log("=========", res.data)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
			loading:false,
		})
		dispatch(loadUser())
		dispatch({
			type: LOADER,
			payload: false
		})
		// dispatch(setAlert(res.data.message))
		dispatch(setAlert("Register Sucess", "success", 1, "/"))
	} catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		if (err.response) {
			dispatch(setAlert(err.response.data.error));
			dispatch({
				type: REGISTER_FAILURE
			});
		} else {
			dispatch(setAlert("Network error ! Please check your connection"));
			dispatch({
				type: REGISTER_FAILURE
			});
		}
	}
};


//Login

export const login = (email, password) => async dispatch => {
	delete axios.defaults.headers.common['jwt'];
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	localStorage.clear();
	const body = JSON.stringify({ email, password })
	console.log("body",body);
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		// http://localhost:8080/api/aut
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/auth`, body, config);
		console.log("=========", res.data)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data, loading: false 
		})
		dispatch(loadUser())
		dispatch({
			type: LOADER,
			payload: false
		})
	}
	catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		if (err.response) {
			dispatch(setAlert(err.response.data.errors));
			dispatch({
				type: LOGIN_FAILURE
			});
		}
		 else {
			dispatch(setAlert("Network error ! Please check your connection"));
			// dispatch(setAlert("Network error ! Please check your connection", 'error', 1, "/"));
			dispatch({
				type: LOGIN_FAILURE
			});
		}
	}
};

//Reset Password


export const passwordReset = ({ email }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		}
	};
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/auth/reset-password`, { email }, config);
		dispatch(setAlert(res.data.message))
		dispatch({
			type: LOADER,
			payload: false
		})
	} catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		});
		if (err.response) {
			dispatch(setAlert(err.response.data.error));

		} else {
			dispatch(setAlert("Network error ! Please check your connection"));

		}

	}

}

//Update User With Data
export const updateUser = (data) => (dispatch) => {
	try {
		dispatch({
			type: USER_LOADED ,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

//Logout //clear 
// Logout / Clear Profile
export const logout = () => dispatch => {
	dispatch({ type: CLEAR_PROFILE })
	dispatch({ type: LOGOUT });
	dispatch({
		type: REMOVE_ALERT,
		payload: false
	});
};
