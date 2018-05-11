/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-08 14:57:15
 * @Email: 991034150@qq.com
 * @Description: 用户查询
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-08 14:57:15
 */

export default {
  url: '/systemManage/userlist/:currentPage/:pageSize',
  mock: {
    'code': 1,
    'msg': 'success',
    'result': {
      'userList|8-10': [
        {
          'id|+1': 1,
          'username|+1': ['系统管理员', '超级管理员', '管理员', '访客'],
          'roles|+1': ['角色1', '角色2'],
          'roleTypes|+1': ['角色类型1', '角色类型2'],
          'organization|+1': ['中心', '省级部门']
        }
      ]
    },
    'pageInfo': {
      'totalPage': 10,
      'totalCount': 50,
      'currentPage': 1
    }
  }
}
