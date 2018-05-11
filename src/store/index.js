import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as home from './homeModules'
import * as workTable from './workTableModules'
import * as systemMenaga from './systMenagaModules'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
const modules = {
  home,
  workTable,
  systemMenaga
}

export default new Vuex.Store({
  // strict: !!debug,
  plugins: debug ? [createLogger()] : [],
  modules: modules
})
