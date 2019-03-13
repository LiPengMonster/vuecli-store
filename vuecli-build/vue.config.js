/*
 * @Author: 吴占超
 * @Date: 2018-09-20 20:05:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-12-09 13:33:06
 * vue配置文件
 */
module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production' ? '/wxapp' : '/',
  // 输出文件目录
  outputDir: 'dist',
  devServer: {
    // 前端端口
    port: 8089,
    // 代理地址
    proxy: 'http://127.0.0.1:7001'
    // mock.js
    // before(app) {
    //   app.get('')
    // }
  }
}
