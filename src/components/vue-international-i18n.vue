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
        <el-tab-pane :label="$t('message.music')" name="first">{{$t('message.music')}}</el-tab-pane>
        <el-tab-pane :label="$t('message.findMusic')" name="second">{{$t('message.findMusic')}}</el-tab-pane>
        <el-tab-pane :label="$t('message.myMusic')" name="third">{{$t('message.myMusic')}}</el-tab-pane>
        <el-tab-pane :label="$t('message.friend')" name="fourth">{{$t('message.friend')}}</el-tab-pane>
        <el-tab-pane :label="$t('message.musician')" name="fivth">{{$t('message.musician')}}</el-tab-pane>
        <el-tab-pane :label="$t('message.download')" name="sixth">{{$t('message.download')}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
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
