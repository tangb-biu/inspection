import { LOGIN } from './mutation-types'
import common from '@/utils/common'
export default {
	[LOGIN](state, info) {
		let loginState = state.loginState;
		let newState = Object.assign({}, loginState, info);
		return Object.assign({}, state, newState);
	}
}