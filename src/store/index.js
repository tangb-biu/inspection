import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import loginState from './common'
Vue.use(Vuex)

const state = {
	loginState,
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})