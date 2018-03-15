import { LOGIN, GET_TARGETS, ERROR_MESSAGE } from './mutation-types'
import common from '@/utils/common'
export default {
	[LOGIN](state, info) {
		let commonState = state.commonState;
		commonState = Object.assign({}, commonState, info);
		state.commonState = commonState;
		//let newstate = Object.assign({}, state, { commonState });
		//return newstate;
	},
	[GET_TARGETS](state, info) {
		let commonState = state.commonState;
		commonState = Object.assign({}, commonState, info);
		state.commonState = commonState;
		//let newstate = Object.assign({}, state, { commonState });
		//return newstate;
	},
	[ERROR_MESSAGE](state, info) {
		let commonState = state.commonState;
		commonState = Object.assign({}, commonState, info);
		state.commonState = commonState;
		//let newstate = Object.assign({}, state, { commonState });
		//return newstate;
	}
}