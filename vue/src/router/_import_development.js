module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+
/*可以使用import 和   module.exports  default组合来实现模块的加载*/
/*主要用来在其他模块加载某个模块的功能*/
