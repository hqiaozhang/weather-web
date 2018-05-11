/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-07 11:22:20
 * @Email: 991034150@qq.com
 * @Description: 所有mock 出口
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-08 16:01:05
 */

// 首页mock数据
import * as homeMock from './home/mock'
// 工作台数据
import * as workTableMock from './workTable/mock'
// 系统管理
import * as systemMenagaMock from './systemMenaga'

export default {
  ...homeMock,
  ...workTableMock,
  ...systemMenagaMock
}
