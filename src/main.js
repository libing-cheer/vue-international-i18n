import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
/*---------挂载全局使用-----------*/
Vue.use(VueI18n)
Vue.use(ElementUI)
/*---------基本使用-----------*/

// /*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('./assets/common/cn'),   // 中文语言包
    'zh-EN': require('./assets/common/en'),   // 英文语言包
    'zh-FA': require('./assets/common/fa'),    // 法语语言包
    'zh-FT': require('./assets/common/ft')     // 繁体字语言包
  },
})
/*---------语言包内部语法star-----------*/
// export const  message = {
//   language:'语言',
//   hello: '你好,世界'
// }
/*---------语言包内部语法end-----------*/


// Vue.use(VueI18n)
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
