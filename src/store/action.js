import { LOGIN, GET_TARGETS, ERROR_MESSAGE } from './mutation-types'
import { 
	login, 
	getTargets, 
	saveTarget, 
	updateTarget, 
	deleteTarget,
	getPerformanceParseList 
} from '@/api/common';

let getRouter = (config) => {
	let router = config.that.$router;
	delete config.that;
	return router;
}

let handleError = (err ,router) => {
	if(err.statusCode === 401) {
		router.push('/login');
		return;
	}
}
export default {
	userLogin({ commit }, config) {
		return new Promise((resolve, reject) => {
			let router = getRouter(config);
			login(config, (res) =>{
				commit(LOGIN, {login: true});
				resolve({msg: ""});
			}, (error) => {
				handleError(error);
				commit(LOGIN, {login: false});
				reject({msg: error.data.msg});
			})
		});
	},
	targetsLoad( { commit }, config ) {
		let Router = getRouter(config);
		return new Promise((resolve, reject) => {
			getTargets(config, (res) => {
	    		commit(GET_TARGETS, {pager: res.pager, targets: res.data});
			}, (error) => {
				handleError(error);
				commit(ERROR_MESSAGE, { errMsg: error.errMsg});
			})
		})
	},

	saveTarget( {commit }, config ) {
		let router = getRouter(config);
		return new Promise((resolve, reject) => {
			saveTarget(config, (res) => {
				//commit(GET_TARGETS, { pager: res.pager, targets: res.data });
				resolve();
			},
			(error) => {
				handleError(error);
				reject(error);
			})
		})
	},

	updateTarget( {commit }, config ) {
		let router = getRouter(config);
		return new Promise((resolve, reject) => {
			updateTarget(config, (res) => {
				//commit(GET_TARGETS, { pager: res.pager, targets: res.data });
				resolve();
			},
			(error) => {
				handleError(error);
				reject(error);
			})
		})
	},
	deleteTarget( { commit }, config ) {
		let router = getRouter(config);
		return new Promise((resolve, reject) => {
			deleteTarget(config, (res) => {
				//commit(GET_TARGETS, { pager: res.pager, targets: res.data });
				resolve();
			},
			(error) => {
				handleError(error);
				reject(error);
			})
		})
	},
	getParseList( { commit }, config) {
		let router = getRouter(config);
		return new Promise((resolve, reject) => {
			getPerformanceParseList(config, (res) => {
				resolve(res);
			},
			(error) => {
				handleError(error);
				reject(error);
			})
		})
	}
}