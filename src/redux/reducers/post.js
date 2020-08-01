import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST,GET_POST,ADD_COMMENT,REMOVE_COMMENT } from "../actions/type"



const initailState ={
	posts:[],
	post:null,  
	loading:true,
	error:""
}

export default function (state = initailState,action) {
	const {type,payload}= action

	switch(type){
		case GET_POSTS:
			return{
				...state,
				posts:payload,
				loading:false
			}
		case GET_POST:
			return{
				...state,
				post:payload,
				loading:false
			}	
		case ADD_POST: {
			console.log("hi",state);
			return {
				...state,
				posts: [...state.posts, payload],
				loading: false
			}
		}
		case DELETE_POST:
			console.log("del",payload);
			return {
				...state,
				posts: state.posts.filter(post => post._id !== payload),
				loading: false
			};		
		case POST_ERROR:
			return{
				...state,
				error:payload,
				loading:false
			}
		case UPDATE_LIKES:
			console.log("Likes",UPDATE_LIKES);
			return {
				...state,
				posts: state.posts.map(post =>
					post._id === payload.id ? { ...post, likes: payload.likes } : post
				),
				loading: false
			};
		case ADD_COMMENT:
			return{
				...state,
				post:{...state.post,comments:payload},
				loading:false
			}
		case REMOVE_COMMENT:
			return{ 
				...state,
				post:{
					...state.post,
					comments: state.post.comments.filter(
						comment => comment._id !== payload
					)
				},
				loading:false
			}			
		default:
			return state		
	}
	
}