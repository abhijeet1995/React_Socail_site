import axios from 'axios'
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST,ADD_POST, GET_POST,ADD_COMMENT,REMOVE_COMMENT} from '../actions/type'
import {envData} from '../../config/config'

//Get posts
export const getPost = () => async dispatch => {
	try{
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/posts`)
		console.log("Profile GetPost",res);
		dispatch({
			type:GET_POSTS,
			payload:res.data
		})
	}catch(err){
		console.log(err);
	}
}


// Add like
export const addLike = id => async dispatch => {
	try {
	
		const res = await axios.put(`${envData.url.REACT_APP_API_URL}/posts/like/${id}`);
		console.log("Post like",res.data);
		
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		
		});
		
	} catch (err) {
		// dispatch({
		// 	type: POST_ERROR,
		// 	payload: err.response.data.error
		// });
		console.log(err);
	}
};

// Remove like
export const removeLike = id => async dispatch => {
	try {
		const res = await axios.put(`${envData.url.REACT_APP_API_URL}/posts/unlike/${id}`);
		console.log("Post removelike", res);
		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data }
		});
	} catch (err) {
		console.log(err);
		// dispatch({
		// 	type: POST_ERROR,
		// 	//payload: err.response.data.error
		// });
	}
};

export const deletePost = id => async dispatch => {
	try {
		await axios.delete(`${envData.url.REACT_APP_API_URL}/posts/${id}`);

		dispatch({
			type: DELETE_POST,
			payload: id
		});

		dispatch(setAlert('Post Removed', 'error'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			//payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

// ADD post
export const addPost = formdata => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try {
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/posts`,formdata,config);
		dispatch({
			type: ADD_POST,
			payload: res.data
		});
		//console.log("addpost",res.data);
		dispatch(setAlert("Add post", "success"))
	} catch (err) {
		console.log(err);
		// dispatch({
		// 	type: POST_ERROR,
		// 	//payload: err.response.data.error
		// });
	}
};



//Get post
export const getSinglePost = id => async dispatch => {
	try {
		const res = await axios.get(`${envData.url.REACT_APP_API_URL}/posts/${id}`)
		console.log("Profile GetPost", res);
		dispatch({
			type: GET_POST,
			payload: res.data
		})
	} catch (err) {
		// dispatch({
		// 	type: POST_ERROR
		// });
		console.log(err);
	}
}

//Add comment

export const addComment = (postId, formdata) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	try {
		const res = await axios.post(`${envData.url.REACT_APP_API_URL}/posts/comment/${postId}`, formdata, config);
		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		});
		console.log("Comment", res.data);
		dispatch(setAlert("Add comment", "success"))
	} catch (err) {
		console.log(err);
		// dispatch({
		// 	type: POST_ERROR,
		// 	//payload: err.response.data.error
		// });
	}
};


//Remove comment																	
export const deleteComment = (postId, commentId) => async dispatch => {
	
	try {
		const res = await axios.delete(`${envData.url.REACT_APP_API_URL}/posts/comment/${postId}/${commentId}`);
		dispatch({
			type: REMOVE_COMMENT,
			payload: commentId
		});
		console.log("Comment", res.data);
		dispatch(setAlert("Comment Remove", "error"))
	} catch (err) {
		console.log(err);
		// dispatch({
		// 	type: POST_ERROR,
		// 	//payload: err.response.data.error
		// });
	}
};