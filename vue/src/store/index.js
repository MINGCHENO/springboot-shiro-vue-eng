import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

/*下载vuex*/
Vue.use(Vuex)
/*modules中对modules文件中所有进行实例化, 方便其他js,vue文件对它们的调用*/

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
})

export default store
