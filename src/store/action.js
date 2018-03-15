import { LOGIN, GET_TARGETS, ERROR_MESSAGE } from './mutation-types'
import { login, getTargets } from '@/api/common';
export default {
	userLogin({ commit }, config) {
		return new Promise((resolve, reject) => {
			login(config, (res) =>{
				commit(LOGIN, {login: true});
				resolve({msg: ""});
			}, ({response}) => {
				commit(LOGIN, {login: false});
				reject({msg: response.data.msg});
			})
		});
	},
	targetsLoad( { commit }, config ) {
		return new Promise((resolve, reject) => {
			getTargets(config, (res) => {
				commit(GET_TARGETS, {pager: res.pager, targets: res.data});
			}, (error) => {
				commit(ERROR_MESSAGE, { errMsg: error.errMsg});
			})
		})
	}
}