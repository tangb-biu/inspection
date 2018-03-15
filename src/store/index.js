import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import commonState from './common'
Vue.use(Vuex)


const getters = {
	getTargets: (state) => state.commonState.targets,
	getPager: (state) => state.commonState.pager
}

const state = {
	commonState
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})