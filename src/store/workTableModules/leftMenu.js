/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-08 09:16:48
 * @Email: 991034150@qq.com
 * @Description: 左边导航store
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-08 09:21:50
 */

import { fetch } from '@/util/request'

// 左边导航state
const state = {
  menuList: []
}

const actions = {
  leftMenuRequest ({commit}) {
    fetch('fetchLeftMenu', (data) => {
      commit('leftMenuSuccess', data)
    })
  }
}

const mutations = {
  leftMenuSuccess (state, data) {
    state.menuList = data.menuList
  }
}

export default {
  state,
  mutations,
  actions
}
