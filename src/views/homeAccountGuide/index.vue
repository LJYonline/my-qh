<template>
  <div>
    <div class="account-title">
      <div  @click="goUrl">在线开户</div>
      <van-notice-bar scrollable left-icon="volume-o" text="点击“在线开户”，下载软件，让我们为您服务。" />
    </div>
    <div class="account-content">
      <van-collapse v-model="activeName" accordion>
        <!-- 开户需要多少时间？ -->
        <van-collapse-item name="1">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>开户需要多少时间？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[0]"></p>
        </van-collapse-item>
        <!-- 开立个人账户所需材料及流程 -->
        <van-collapse-item name="2">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>开立个人账户所需材料及流程</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[1]"></p>
        </van-collapse-item>
        <!-- 法人户开户基本条件？ -->
        <van-collapse-item name="3">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>法人户开户基本条件？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[2]"></p>
        </van-collapse-item>
        <!-- 开立法人户需要哪些资料？ -->
        <van-collapse-item name="4">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>开立法人户需要哪些资料？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[3]"></p>
          <p class="account-item-text" v-text="itemText[4]"></p>
          <p class="account-item-text" v-text="itemText[5]"></p>
          <p class="account-item-text" v-text="itemText[6]"></p>
          <p class="account-item-text" v-text="itemText[7]"></p>
          <p class="account-item-text" v-text="itemText[8]"></p>
          <p class="account-item-text" v-text="itemText[9]"></p>
          <p class="account-item-text" v-text="itemText[10]"></p>
          <p class="account-item-text" v-text="itemText[11]"></p>
          <p class="account-item-text" v-text="itemText[12]"></p>
        </van-collapse-item>
        <!--法人户开户流程 -->
        <van-collapse-item name="5">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>法人户开户流程</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[13]"></p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Collapse, CollapseItem, Icon, NoticeBar} from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Icon);
Vue.use(NoticeBar);

export default {
  name: 'HomeAccountGuide',
  data() {
    return {
      activeName: '1',
      itemText:[
        "开户时间一般为2-3个工作日。",
        "弘业国际金融现已上线网上开户系统。客户需登记手机号码以接收验证码登录网开系统。开户时客户需预先持有身份证明文件及住址证明文件, 无资金限制。线上开户时需录制视频、收听风险披露。录音开户审核完成后，客户将邮件收到登入账号及交易密码。",
        "法人客户需在中国大陆以外地区注册成立。",
        "1.	有效商业登记证副本；",
        "2.	公司注册证书及其后更改的资料；",
        "3.	公司组织章程大纲及细则，及其后任何修订副本；",
        "4.	最新周年申报表及其后更改的资料；若没有，请提供各董事香港身份证或护照副本；",
        "5.	最新经审计财务报表的核证副本(如有)；",
        "6.	董事(法定人数之董事)和所有授权签署人和主要股东或实益拥有人的身份证或护照或其它旅行证件副本；",
        "7.	如公司的上层股东为公司，请提交由一位董事签名确认的公司股权结构图。公司股权结构图必须披露持有10% 或以上的每一层股东及其最终股东所拥有之股权百分比(%)、成立的国家及法人股东之公司名称, 并列出中间拥有人直至最终实益拥有人；",
        "8.	各董事及各股东住宅地址证明（有效期为近三个月的）；",
        "9.	该公司董事会决议副本授权签署人代表该公司执行此公司事务；",
        "10.	提供该公司授权签署人员的签字样本名单副本。",
        "客户签署合同以及其它要求材料后，交于弘业国际金融。弘业国际金融审核通过后，会通过电子邮件通知客户其账号以及交易密码。"
      ],
      url: 'http://jybdl.iqdii.com/JYB_DownLoad.aspx?code=hls'
    };
  },
  methods: {
    goUrl() {
      console.log("点击了");
      window.location.href = this.url
      // window.location.replace(this.url)
    }
  }
};
</script>

<style>
@import './style.css';
</style>