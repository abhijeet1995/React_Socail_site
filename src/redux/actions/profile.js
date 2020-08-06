import axios from 'axios'
import {setAlert} from './alert'
import {envData} from '../../config/config'
import { GET_PROFILE, PROFILE_ERROR, LOADER, UPDATE_PROFILE, CLEAR_PROFILE, DELETE_ACCOUNT, GET_ALL_PROFILE, GET_REPOS} from './type'


//Get current profile

export const getCurrentProfile = () =>async dispatch =>{
	try{
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/profile/me`)
		dispatch({
			type:GET_PROFILE,
			payload:res.data
		})
	}
	catch(err){
		//dispatch(setAlert("Network error ! Please check your connection"));
		dispatch({
			type:PROFILE_ERROR,
			// payload:{msg:err.response.statusText,status:err.response.status}
		})
	}
}

//Get all Profile

export const getALlProfile = () => async dispatch => {
	//dispatch({ type: CLEAR_PROFILE });

	try {
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/profile`)
		dispatch({
			type: GET_ALL_PROFILE,
			payload: res.data
		})
		{
			console.log("payload",res.data)
		}
	}
	catch (err) {
		//dispatch(setAlert("Network error ! Please check your connection"));
		dispatch({
			type: PROFILE_ERROR,
			// payload:{msg:err.response.statusText,status:err.response.status}
		})
	}
}


//Get Profile By ID


export const getProfileById = userId => async dispatch => {
	
	try {
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/profile/user/${userId}`)
		dispatch({
			type: GET_PROFILE,
			payload:res.data
		})
		{
			console.log("data",res)
		}
	}
	catch (err) {
		//dispatch(setAlert("Network error ! Please check your connection"));
		dispatch({
			type: PROFILE_ERROR,
			// payload:{msg:err.response.statusText,status:err.response.status}
		})
	}
}

//Get Git repos



export const getGitRepos = username => async dispatch => {
	
	try {
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/profile/github/${username}`)
		dispatch({
			type: GET_REPOS,
			payload: res.data
		})
	}
	catch (err) {
		//dispatch(setAlert("Network error ! Please check your connection"));
		dispatch({
			type: PROFILE_ERROR,
			// payload:{msg:err.response.statusText,status:err.response.status}
		})
	}
}






//Create or update Profile

export const createProfile = (formdata,history,edit=false) => async dispatch =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try{
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/profile`,formdata,config);
		dispatch({
			type:GET_PROFILE,
			payload:res.data
		});
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success',1,"/"));
		// if(!edit){
		// 	history.push('/dashboard')
		// }
	}
	catch(err){
		dispatch({
			type: LOADER,
			payload: false
		});
		if(err.response){
			dispatch(setAlert(err.response.data.error));
			dispatch({
				type: PROFILE_ERROR,
				//payload: { msg: err.response.statusText, status: err.response.status }
			})
		}
		
		else {
			dispatch(setAlert("Network error ! Please check your connection"));
			dispatch({
				type: PROFILE_ERROR
			});
		}

		
	}
}

//Add Experience

export const addExperience = (formdata,history) => async dispatch=>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.put(`${envData.url.REACT_APP_API_URL}/profile/experience`, formdata, config);
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data
		});
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(setAlert("Experience added", "success", 0, "/"))
		//history.push('/dashboard')
		
	}
	catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		});
		if (err.response) {
			dispatch(setAlert(err.response.data.error));
			dispatch({
				type: PROFILE_ERROR,
				//payload: { msg: err.response.statusText, status: err.response.status }
			})
		}

		else {
			dispatch(setAlert("Network error ! Please check your connection"));
			dispatch({
				type: PROFILE_ERROR
			});
		}


	}
}

//Add Education
export const addEducation = (formdata, history) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try {
		dispatch({
			type: LOADER,
			payload: true
		})
		const res = await axios.put(`${envData.url.REACT_APP_API_URL}/profile/education`, formdata, config);
		dispatch({
			type: UPDATE_PROFILE,
			payload: res.data
		});
		dispatch({
			type: LOADER,
			payload: false
		})
		dispatch(setAlert("Education added", "success", 1, "/"))
		//history.push('/dashboard')

	}
	catch (err) {
		dispatch({
			type: LOADER,
			payload: false
		});
		if (err.response) {
			dispatch(setAlert(err.response.data.error));
			dispatch({
				type: PROFILE_ERROR,
				//payload: { msg: err.response.statusText, status: err.response.status }
			})
		}

		else {
			dispatch(setAlert("Network error ! Please check your connection"));
			dispatch({
				type: PROFILE_ERROR
			});
		}


	}
}

//Delete Experience
export const deleteExperience = (id) => async dispatch =>{
	if (window.confirm('Are YOu Sure TO delete Account')) {
		try {
			const res = await axios.delete(`${envData.url.REACT_APP_API_URL}/profile/experience/${id}`);
			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data
			})
			dispatch(setAlert("Delete Sucessfully"))
		} catch (err) {
			if (err.response) {
				dispatch(setAlert(err.response.data.error));
				dispatch({
					type: PROFILE_ERROR,
					//payload: { msg: err.response.statusText, status: err.response.status }
				})
			}

			else {
				dispatch(setAlert("Network error ! Please check your connection"));
				dispatch({
					type: PROFILE_ERROR
				});
			}


		}
	}
	
}


//Delete Education
export const deleteEducation= (id) => async dispatch => {
	if (window.confirm('Are YOu Sure TO delete Account')) {
		try {
			const res = await axios.delete(`${envData.url.REACT_APP_API_URL}/profile/education/${id}`);
			dispatch({
				type: UPDATE_PROFILE,
				payload: res.data
			})
			dispatch(setAlert("Delete Sucessfully"))
		} catch (err) {
			if (err.response) {
				dispatch(setAlert(err.response.data.error));
				dispatch({
					type: PROFILE_ERROR,
					//payload: { msg: err.response.statusText, status: err.response.status }
				})
			}

			else {
				dispatch(setAlert("Network error ! Please check your connection"));
				dispatch({
					type: PROFILE_ERROR
				});
			}


		}
	}
	
}
//Delete Account 

export const deleteAccount = () => async dispatch => {
	if(window.confirm('Are You Sure TO delete Account')){
		try {
			const res = await axios.delete(`${envData.url.REACT_APP_API_URL}/profile`);
			dispatch({type: CLEAR_PROFILE})
			dispatch({ type: DELETE_ACCOUNT })
			dispatch(setAlert("Your Account Has been Permannetly Deleted Sucessfully"))
		} catch (err) {
			if (err.response) {
				dispatch(setAlert(err.response.data.error));
				dispatch({
					type: PROFILE_ERROR,
				})
			}

			else {
				dispatch(setAlert("Network error ! Please check your connection"));
				dispatch({
					type: PROFILE_ERROR
				});
			}


		}
	}
	
}