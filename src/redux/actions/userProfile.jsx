import axios from 'axios'
import {
CHANGE_PASSWORD,
PASSWORD_FAIL,
LOADER
} from './type'
import { setAlert } from './alert'


export const changePassword = ({ currentPassword, newPassword }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const body = JSON.stringify({ currentPassword,newPassword })
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.put('http://localhost:8080/api/auth/changePassword', body, config);
		console.log("=========", res.data)
		dispatch({
			type: CHANGE_PASSWORD,
			payload: res.data,
			loading: false,
		})
		dispatch({
			type: LOADER,
			payload: false
		})
		// dispatch(setAlert(res.data.message))
		dispatch(setAlert("Password Change", "success"))
	} catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		if (err.response) {
			dispatch(setAlert(err.response.data.error));
			dispatch({
				type:PASSWORD_FAIL
			});
		} else {
			dispatch(setAlert("Network error ! Please check your connection"));
			dispatch({
				type: PASSWORD_FAIL
			});
		}
	}
};