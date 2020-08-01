
import {
CHANGE_PASSWORD
} from '../actions/type'

const initialState = {
	loading: true,
}
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_PASSWORD:
			return {
				...state,
				loading: false,
			}
		case PASSWORD_CHANGE_FAIL:
			return {
				...state,
				loading: false,
			}
		default:
			return state;
	}
}