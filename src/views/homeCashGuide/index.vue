<template>
  <div>
    <div class="account-title">
      出入金指南
    </div>
    <div class="account-content">
      <!-- activeName控制展示折叠面板 -->
      <van-collapse v-model="activeName" accordion>
        <!-- 弘业国际金融入金的方式有几种？ -->
        <van-collapse-item name="1">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>弘业国际金融入金的方式有几种？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[0]"></p>
          <p class="account-item-text" v-text="itemText[1]"></p>
          <p class="account-item-text" v-text="itemText[2]"></p>
        </van-collapse-item>
        <!-- 弘业国际金融入金的流程是什么？ -->
        <van-collapse-item name="2">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>弘业国际金融入金的流程是什么？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[3]"></p>
          <p class="account-item-text" v-text="itemText[4]"></p>
        </van-collapse-item>
        <!-- 入金时间大约要多久？ -->
        <van-collapse-item name="3">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>入金时间大约要多久？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[5]"></p>
          <p class="account-item-text" v-text="itemText[6]"></p>
        </van-collapse-item>
        <!-- 弘业国际金融出金流程是什么？ -->
        <van-collapse-item name="4">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>弘业国际金融出金流程是什么？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[7]"></p>
          <p class="account-item-text" v-text="itemText[8]"></p>
        </van-collapse-item>
        <!-- 出金时间大约要多久？ -->
        <van-collapse-item name="5">
          <template #title>
              <div class="account-mark"></div>&nbsp;&nbsp;
              <div class="account-item"><b>出金时间大约要多久？</b></div>
          </template>
          <p class="account-item-text" v-text="itemText[9]"></p>
          <p class="account-item-text" v-text="itemText[10]"></p>
        </van-collapse-item>
        <!--公司可以接受24 小时转账吗？如果客户想晚上入金公司可以办理吗？ -->
        <van-collapse-item name="6">
          <template #title>
              <div class="cash-mark"></div>&nbsp;&nbsp;
              <div class="cash-item"><strong>公司可以接受24小时转账吗？如果客户想晚上入金公司可以办理吗？</strong></div>
          </template>
          <p class="account-item-text" v-text="itemText[11]"></p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse);
Vue.use(CollapseItem);

export default {
  name: 'HomeCashGuide',
  data() {
    return {
      activeName: '0',
      itemText:[
        "1. 客户从境外银行卡直接入金到公司账户",
        "2.	客户从境内外银行卡入金到香港的银行子账户。银行子账户由弘业国际金融为客户开立，此账户仅做入金使用。",
        "注意：弘业国际金融只接受客户本人入金。",
        "1.	客户通过柜面或者网银进行资金的划转，并提供汇款凭证给弘业国际金融。",
        "2.	等待钱款到账后，弘业国际金融工作人员凭汇款凭证及银行到账的资金进行入金操作，并致电客户确认入金。核实后客户权益将会反应在软件的客户端上。",
        "1.	客户从大陆购汇汇到香港银行账户，一般需要1-2个工作日；",
        "2.	客户从香港银行账户汇到弘苏期货保证金账户，同行即时到账，跨行1天左右。",
        "1.	客户提出出金要求，签署出金确认书，出金确认书会以电子方式（或原件）传弘业国际金融。",
        "2.	弘业国际金融确认客户账户可提金额，交易部用录音电话致电客户确认出金。弘业国际金融通过网上银行或者柜台转账的方式转出相应数额的资金到客户同名的银行账户。",
        "1. 从弘业国际金融保证金账户出到客户香港银行账户，同行即时到账，跨行一天左右；",
        "2.	从弘业国际金融保证金账户出到客户其他银行账户，一般需要1-3个工作日。",
        "不可以，客户出入金只能在弘业国际金融工作时间办理。"
      ]    
    };
  },
};
</script>

<style scoped>
@import './style.css';
</style>
