import { LOGIN } from './mutation-types'
import { login } from '@/api/common';
export default {
	userLogin({ commit }, config) {
		return new Promise((resolve, reject) => {
			login(config, (res) =>{
				commit(LOGIN, {login: true});
				resolve({msg: ""});
			}, ({response}) => {
				commit(LOGIN, {login: false, msg: response.data.msg});
				reject({msg: response.data.msg});
			})
		});
	}
}