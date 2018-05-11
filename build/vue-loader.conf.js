/*
 * @Author: zhanghongqiao 
 * @Date: 2018-05-10 08:55:04 
 * @Email: 991034150@qq.com 
 * @Description: vue解析配置项
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-05-10 09:10:31
 */

'use strict'

const utils = require('./utils')
const config = require('./config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
