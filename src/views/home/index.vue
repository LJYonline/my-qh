<template>
  <div class="page page-hello">
    <div class="page-content">
      <van-tabs class="page-tables" v-model="active" :color="'#5b9dff'" title-active-color="#5b9dff" :line-width="tabWidth" line-height="1px" swipeable animated>
        <!-- 弘苏介绍 -->
        <van-tab title="弘苏介绍" :title-style="tabWidthStr">
          <div class="table-content">
            <HomeAbout></HomeAbout>
          </div>
        </van-tab>
        <!-- 开户指南 -->
        <van-tab title="开户指南" :title-style="tabWidthStr"> 
          <div class="table-content">
            <HomeAccountGuide></HomeAccountGuide>
          </div>
        </van-tab>
        <!-- 出入金指南 -->
        <van-tab title="出入金指南" :title-style="tabWidthStr">
          <div class="table-content">
            <HomeCashGuide></HomeCashGuide>
          </div>
        </van-tab>
        <!-- 品种细则 -->
        <van-tab title="品种细则" :title-style="tabWidthStr">
          <div class="table-content">
            <HomeVarietyRules></HomeVarietyRules>
          </div>
        </van-tab>
        <!-- 交易所介绍 -->
        <van-tab title="交易所介绍" :title-style="tabWidthStr">
          <div  class="table-content">
            <HomeExchangeAbout></HomeExchangeAbout>
          </div>
        </van-tab>
        <!-- 常见问题 -->
        <van-tab title="常见问题" :title-style="tabWidthStr">
          <div  class="table-content">
            <HomeCommonProblem></HomeCommonProblem>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
import HomeAbout from '../homeAbout';
import HomeAccountGuide from '../homeAccountGuide'
import HomeCashGuide from '../homeCashGuide'
import HomeVarietyRules from '../homeVarietyRules'
import HomeExchangeAbout from '../homeExchangeAbout'
import HomeCommonProblem from '../homeCommonProblem'
Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: 'home',
  components: {
    HomeAbout,
    HomeAccountGuide,
    HomeCashGuide,
    HomeVarietyRules,
    HomeExchangeAbout,
    HomeCommonProblem
  },
  data() {
    return {
      active: 0,
      tabWidth: 0,
    };
  },
  created() {
    this.getWindowsWidth();
  },
  methods: {
    getWindowsWidth() {
      if (window.innerWidth) {
        const winWidth = window.innerWidth;
        this.tabWidth = winWidth / 3; // 标签三等分显示
        console.log(this.tabWidth);
      }
    },
  },
  computed: {
    tabWidthStr() {
      return `width: ${this.tabWidth}px`;
    },
  },
};
</script>
<style>
@import './style.css';
</style>
