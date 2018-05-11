/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-07 21:06:45
 * @Email: 991034150@qq.com
 * @Description: 顶部导航数据请求
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-07 21:19:37
 */

import { fetch } from '@/util/request'

const state = {
  menuList: []
}

// 顶部导航actions
const actions = {
  /**
   * @description 获取头部导航数据
   * @param {function} {commit}
   */
  topMenuRequest ({commit}) {
    fetch('fetchTopMenu', (data) => {
      commit('topMenuSuccess', data.menuList)
    })
  }
}
// 顶部导航mutations
const mutations = {
  /**
   * @description 数据获取成功
   * @param {object} state
   * @param {array} data
   */
  topMenuSuccess (state, data) {
    state.menuList = data
  }
}

export default {
  state,
  actions,
  mutations
}
