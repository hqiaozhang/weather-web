/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-08 10:24:01
 * @Email: 991034150@qq.com
 * @Description: 工作台左边菜单mock数据
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-08 11:32:51
 */

export default {
  url: '/menus/001',
  mock: {
    'code': 1,
    'msg': 'success',
    'result': {
      'menuList': [
        {
          'id': '@id',
          'name': '待办任务',
          'icon': 'todo',
          'path': 'todo',
          'children': [
            {
              'id': '@id',
              'name': '我的工作台',
              'path': 'myWorkTable'
            },
            {
              'id': '@id',
              'name': '共享交换审核',
              'count': 1,
              'path': 'shareChange'
            },
            {
              'id': '@id',
              'name': '专项数据审核',
              'count': 1,
              'path': 'specialData'
            },
            {
              'id': '@id',
              'name': '数据需求发布',
              'path': 'demandRelease'
            }
          ]
        },
        {
          'id': '@id',
          'name': '我的申请',
          'icon': 'myApply',
          'path': 'myApply',
          'children': [
            {
              'id': '@id',
              'name': '国家数据资源代理申请',
              'path': 'myWorkTable'
            },
            {
              'id': '@id',
              'name': '外省数据资源代理申请',
              'count': 1,
              'path': 'todoTask'
            },
            {
              'id': '@id',
              'name': '资源使用申请',
              'count': 1,
              'path': 'sourceUseApply'
            },
            {
              'id': '@id',
              'name': '专项资源申请',
              'path': 'specialSourceApply'
            },
            {
              'id': '@id',
              'name': '资源需求申请',
              'count': 1,
              'path': 'shareChange'
            },
            {
              'id': '@id',
              'name': '子账户申请',
              'path': 'demandRelease'
            }
          ]
        },
        {
          'id': '@id',
          'name': '数据中心',
          'icon': 'data-center',
          'children|3-5': [
            {
              'id': '@id',
              'name': '@city',
              'path': 'test'
            }
          ]
        },
        {
          'id': '@id',
          'name': '专项',
          'icon': 'special',
          'path': 'special'
        }
      ]
    }
  }
}
