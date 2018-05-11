/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-08 15:26:16
 * @Email: 991034150@qq.com
 * @Description: 用户管理store
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-08 16:36:19
 */

import { fetch } from '@/util/request'

// 用户管理state
const state = {
  userList: []
}

const getters = {
  userList: state => state.userList
}

// actions
const actions = {
  /**
   * @description 获取用户数据
   * @param {any} {commit}
   */
  userListRequest ({commit}) {
    fetch('fetchUserlist', (data) => {
      commit('userListSuccess', data)
    })
  }
}

// mutations
const mutations = {
  userListSuccess (state, data) {
    state.userList = data.userList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
