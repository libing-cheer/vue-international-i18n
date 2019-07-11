# vue-international-i18n
vue项目中使用 vue-i18n，实现一键切换语言的功能。

代码下载后运行以下命令，即可跑起来看到效果。 
```bash
npm run serve
``` 

### 目录结构

- 📁src @根
  - 📁assets  静态资源目录
    - 📁common    字体库
     - 📄cn.js      中文字体库
     - 📄en.js      英文字体库
     - 📄fa.js       法语字体库
     - 📄ft.js       中文繁体字体库
    - img 
     - cn.png       中文预览效果图
     - en.png       英文预览效果图
     - fa.png       法语预览效果图
     - ft.png        中文繁体预览效果图
  - 📁components  组件
    - 📄vue-international-i18n.vue      展示切换语言组件
  - 📄App.vue 入口模版
  - 📄main.js 入口主函数

###   vue-i18n 的使用

#### 1、安装依赖
``` bash
npm install vue-i18n
```

#### 2、入口文件 main.js 配置
在 入口文件 main.js 中引用, demo 用了elementUI的组件，所以在这里全局引用了 element-ui 。

``` javascript
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
  }
})

new Vue({
  i18n, // 这里不要忘记哦！
  render: h => h(App)
}).$mount('#app')

```

#### 3、语言包示例
语言包是自己定义的 js 文件，以中文 cn.js 和 英文 en.js 为例：
``` javascript
//  cn.js 
export const message = {
    music: '网易云音乐',
    findMusic: '发现音乐',
    myMusic: '我的音乐',
    friend: '朋友',
    musician: '音乐人',
    download: '下载客户端'
}
//  en.js
export const message = {
    music: 'Music',
    findMusic: 'FIND MUSIC',
    myMusic: 'MY MUSIC',
    friend: 'FRIEND',
    musician: 'MUSICIAN',
    download: 'DOWNLOAD'
}
```

#### 4、vue-international-i18n.vue 文件
changeLangEvent事件实现语言切换；重点在于"关键语句"：this.$i18n.locale：
当赋值为"zh-CN"时，导航栏就变成中文；
当赋值为 "zh-EN’时，导航栏就变成英文；
当赋值为"zh-FA"时，导航栏就变成法语；
当赋值为"zh-FT"时，导航栏就变成中文繁体。
``` html
<template>
  <div class="international">
    <!-- 切换语言 -->
    <div class="language">
      <el-select 
          v-model="value" 
          placeholder="请选择" 
          @change="changeLangEvent(value)">
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <!-- tabs标签页 -->
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('message.music')" name="first">
            {{$t('message.music')}}
        </el-tab-pane>
        <el-tab-pane :label="$t('message.findMusic')" name="second">
            {{$t('message.findMusic')}}
        </el-tab-pane>
        <el-tab-pane :label="$t('message.myMusic')" name="third">
            {{$t('message.myMusic')}}
        </el-tab-pane>
        <el-tab-pane :label="$t('message.friend')" name="fourth">
            {{$t('message.friend')}}
        </el-tab-pane>
        <el-tab-pane :label="$t('message.musician')" name="fivth">
            {{$t('message.musician')}}
        </el-tab-pane>
        <el-tab-pane :label="$t('message.download')" name="sixth">
            {{$t('message.download')}}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueInternationalI18n",
  data() {
    return {
      value: "zh-CN",
      lang: "zh-CN",
      activeName: "first",
      options: [
        {
          value: "zh-CN",
          label: "中文"
        },
        {
          value: "zh-EN",
          label: "英文"
        },
        {
          value: "zh-FA",
          label: "法语"
        },
        {
          value: "zh-FT",
          label: "繁体"
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    // 切换语言
    changeLangEvent(value) {
      switch (value) {
        case "zh-CN":
          this.lang = value;
          this.$i18n.locale = this.lang; //关键语句
          break;
        case "zh-EN":
          this.lang = value;
          this.$i18n.locale = this.lang; //关键语句
          break;
        case "zh-FA":
          this.lang = value;
          this.$i18n.locale = this.lang; //关键语句
          break;
        case "zh-FT":
          this.lang = value;
          this.$i18n.locale = this.lang; //关键语句
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="css">
.international {
  width: 75vw;
  margin: 0 auto;
}
.language {
  position: absolute;
  right: 12.5vw;
  z-index: 20000000;
}
.tabs {
  margin-top: 15px;
}
</style>
```

### vue-i18n 数据渲染的模板语法


``` html
<!-- v-text 形式 -->
<div v-text="$t('m.music')"></div>

<!-- {{}} 形式 -->
<div>{{$t('m.music')}}</div>
```

### 效果预览

![中文](https://raw.githubusercontent.com/libing-cheer/vue-international-i18n/master/src/assets/img/cn.png)
![英文](https://raw.githubusercontent.com/libing-cheer/vue-international-i18n/master/src/assets/img/en.png)
![法语](https://raw.githubusercontent.com/libing-cheer/vue-international-i18n/master/src/assets/img/fa.png)
![中文繁体](https://raw.githubusercontent.com/libing-cheer/vue-international-i18n/master/src/assets/img/ft.png)

### vue-i18n 了解更多
若想了解更多关于 vue-i18n 的使用，请前往 [vue-i18n 官网](https://kazupon.github.io/vue-i18n/zh/introduction.html)




