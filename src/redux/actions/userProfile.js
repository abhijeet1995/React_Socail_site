import axios from 'axios'
import {
CHANGE_PASSWORD,
PASSWORD_FAIL,
LOADER
} from './type'
import { setAlert } from './alert'
import {envData} from '../../config/config'


// Password change 
export const changePassword = (password, npassword) => async dispatch => {

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({password, npassword});
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/auth/changePassword`, body, config);
		dispatch({
			type: CHANGE_PASSWORD,
			payload: res.data
		});
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(
			setAlert("Password change successfully", 'success')
		);
	} catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(setAlert(err.response.data.error, 'error'));
		dispatch({
			type: PASSWORD_FAIL
		});
	}
};