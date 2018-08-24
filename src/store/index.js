import Vue from 'vue'
import Vuex from 'vuex'
import cl from "./modules/cl";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cl,
  }
})
