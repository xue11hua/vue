import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
	name:'',
	qqem:'',
	mim:'',
	imgurl:'',
	titlea:'',
	context:'',
	zuoname:'',
	tags:[],
}
export default new Vuex.Store({
	state,
})