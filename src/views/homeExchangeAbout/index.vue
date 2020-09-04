<template>
  <div>
    <div class="account-content">
      <!-- <van-collapse v-model="activeName" accordion>
        <van-collapse-item name="1">
          <template #title>
              <div class="exchange-item">1.芝加哥交易所集团CME Group</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[0]"></p>
          <p class="exchange-item-text" v-text="itemText[1]"></p>
        </van-collapse-item>
        <van-collapse-item name="2">
          <template #title>
              <div class="exchange-item">2.洲际交易所ICE</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[2]"></p>
          <p class="exchange-item-text" v-text="itemText[3]"></p>
          <p class="exchange-item-text" v-text="itemText[4]"></p>
        </van-collapse-item>
        <van-collapse-item name="3">
          <template #title>
              <div class="exchange-item">3.伦敦金属交易所LME</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[5]"></p>
          <p class="exchange-item-text" v-text="itemText[6]"></p>
          <p class="exchange-item-text" v-text="itemText[7]"></p>
          <p class="exchange-item-text" v-text="itemText[8]"></p>
        </van-collapse-item>
        <van-collapse-item name="4">
          <template #title>
              <div class="exchange-item">4.香港期货交易所HKFE</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[9]"></p>
          <p class="exchange-item-text" v-text="itemText[10]"></p>
        </van-collapse-item>
        <van-collapse-item name="5">
          <template #title>
              <div class="exchange-item">5.新加坡交易所SGX</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[11]"></p>
          <p class="exchange-item-text" v-text="itemText[12]"></p>
        </van-collapse-item>
        <van-collapse-item name="6">
          <template #title>
              <div class="exchange-item">6.欧洲期货交易所Eurex</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[13]"></p>
          <p class="exchange-item-text" v-text="itemText[14]"></p>
          <p class="exchange-item-text" v-text="itemText[15]"></p>
        </van-collapse-item>
        <van-collapse-item name="7">
          <template #title>
              <div class="exchange-item">7.东京商品交易所TOCOM</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[16]"></p>
          <p class="exchange-item-text" v-text="itemText[17]"></p>
          <p class="exchange-item-text" v-text="itemText[18]"></p>
          <p class="exchange-item-text" v-text="itemText[19]"></p>
        </van-collapse-item>
        <van-collapse-item name="8">
          <template #title>
              <div class="exchange-item">8.马来西亚衍生品交易所BMD</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[20]"></p>
          <p class="exchange-item-text" v-text="itemText[21]"></p>
        </van-collapse-item>
        <van-collapse-item name="9">
          <template #title>
              <div class="exchange-item">9.迪拜黄金与商品交易所DGCX</div>
          </template>
          <p class="exchange-item-text" v-text="itemText[22]"></p>
          <p class="exchange-item-text" v-text="itemText[23]"></p>
        </van-collapse-item>
      </van-collapse> -->
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-for="(item,index) in textList" :key="index" :name="index">
          <template #title>
              <div class="exchange-item">{{item.title}}</div>
          </template>
          <p class="exchange-item-text" v-for="(itemText,index) in item.text" :key="index">
            {{itemText}}
          </p>
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
  name: 'HomeExchangeAbout',
  data() {
    return {
      activeName: '0',
      textList:[
        {
          title:"1.芝加哥交易所集团CME Group",
          text:[
            "芝加哥交易所集团旗下包括四大交易所，分别是芝加哥商业交易所 (CME)、 芝加哥期货交易所(CBOT)、纽约商业交易所 (NYMEX)、纽约商品交易所 (COMEX)。它们是整个期货行业的核心，是期货市场的先锋，在超过250年的期货交易史上有着不可磨灭的地位。每个交易所在期货的价格发现与风险管理上都有着重大的贡献，并且共同造就了今日的全球期货市场。2007年，CME 与CBOT合并成立芝商所。2008年，NYMEX与 COMEX并入芝商所， 世界最大的商品交易所集团正式成立。",
            "CBOT的期货合约包括农产品类：大豆、豆粕、豆油；利率类：2/5/10/30年期国债；指数类：道琼斯指数。COMEX的主要合约是金属：黄金、白银、铜等。CME的期货合约包括：外汇：欧元/英镑/日元/加元/瑞士法郎/澳元/人民币等；股指：标普500指数、纳斯达克指数。NYMEX能源期货有：原油、天然气等。",
          ]
        },
        {
          title:"2.洲际交易所ICE",
          text:[
            "洲际交易所（Intercontinental Exchange，简称ICE）成立于2000年5月，总部位于美国亚特兰大，2001年，ICE在伦敦收购了国际石油交易所，2007年收购纽约期货交易所（NYBOT）和温尼伯商品交易所，2010年与芝加哥气候交易所合并。 2013年11月，ICE完成其对NYSE-Euronext（纽约证券交易所NYSE、泛欧证券交易所Euronext、伦敦国际金融期货交易所LIFFE）的收购，2014年收购新加坡商品期货交易所，行成现在的交易所体系。ICE拥有世界最大的证券交易所，遍布全球的衍生品交易所及清算所，横跨主要投资领域的12000种在交易合约和证券。",
            "ICE是世界最大的石油交易中心之一，也是流动性最大的短期欧洲利率交易市场并交易综合反映美元汇率的重要品种美元指数期货。",
            "NYBOT的期货主要为软商品：咖啡、棉花。NYSE-LIFFE的期货包括：软商品：白糖、可可；贵金属：黄金、白银。IPE 能源产品：布伦特原油、柴油、煤炭。ICE金融产品：美元指数、连续商品指数、外汇。LIFFE金融指数产品：英国富时100指数、巴黎CAC40指数等。"
          ]
        },
        {
          title:"3.伦敦金属交易所LME",
          text:[
            "伦敦金属交易所LME是世界上最大的有色金属交易所，成立于1876年，交易品种有铜、铝、铅、锌、镍和铝合金，交易所的价格和库存对世界范围的有色金属生产和销售有着重要的影响。",
            "伦敦金属交易所的价格和库存对世界范围的有色金属生产和销售有着重要的影响。从本世纪初起，伦敦金属交易所开始公开发布其成交价格并被广泛作为世界金属贸易的基准价格。世界上全部铜生产量的70%是按照伦敦金属交易所公布的正式牌价为基准进行贸易的。",
            "全球最大的金属交易所伦敦金属交易所将接受人民币作为银行和经纪商在该平台交易的质押品，这是人民币全球化进程中迈出的最新一步。伦敦金属交易所2014年的交易额为15万亿美元，目前该交易所接受的质押货币包括美元、欧元、英镑和日元。",
            "LME的期货合约包括：有色金属：铜、铝、锌、铅、锡、镍。其他金属：钢材、钴、钼、 塑料。"
          ]
        },
        {
          title:"4.香港期货交易所HKFE",
          text:[
            "香港期货交易所的前身是1977年开始运营的香港商品交易所。香港商品交易所起初经营原糖和棉花交易，1979年开始大豆交易，1986年5月生指数期货合约开始交易，交易量迅速超过其它合约，占1987年总交易量的87%。香港商品交易所最初每5年进行一次检讨，1982年的检讨认为其经营并未获得成功，1984年对交易所改组和对管理条例修订后才重新挂牌，将香港“商品”交易所更名为“期货”交易所，并把生指数期货定为期货交易的头类合约。1998年生指数期货和期权合约交易量占市场总交易量的90%以上。目前在香港期货交易所上市的还有红筹股票指数、个股等金融品种的期货和期权。由于香港是国际金融中心，有着发达的外汇市场、金融衍生品市场、股票市场、债券市场、资本市场和黄金市场，因此，香港期货交易所有着广泛的发展前景。",
            "HKFE 股指：恒生指数、H股指数、人民币期货、LME小合约。"
          ]
        },
        {
          title:"5.新加坡交易所SGX",
          text:[
            "新加坡交易所有限公司（Singapore Exchange Ltd，简称SGX）成立于1999年12月1日， 由新加坡国际金融期货交易所（SIMEX）与新加坡证券交易所(SES)合并而成，是亚太地区首家集证券及金融衍生产品交易于一体的企业股份制交易所，也是目前新加坡主要的期货交易市场。",
            "SGX的期货合约包括：股指：富时A50指数、 摩根台湾指数、日经指数225；能源：燃料油380sct；金属：LME-Mini合约 铜 铝 锌，铁矿石；外汇：人民币期货。",
          ]
        },
        {
          title:"6.欧洲期货交易所",
          text:[
            "Eurex位于欧洲，1998年秋由德国期货交易所（DTB）和瑞士交易所（Soffex）合并而成。Eurex是世界上最大的期货和期权交易所之一。",
            "全球的银行、专业贸易公司和金融机构投资者等成员公司都可以使用Eurex系统。EUREX 标准化、分权式的交易系统，使其市场参与者在全球各地都能下单交易该交易所的产品。Eurex已具备世界级衍生性产品交易所应具备的条件：包括流动性高的国际性产品、现代化的结算架构、便捷且具成本低的交易信道、全球性通路以及先进的高科技设施。",
            "Eurex的期货合约包括：股指：德国DAX指数、欧盟50指数；利率：欧洲2/5年期国债。",
          ]
        },
        {
          title:"7.东京商品交易所TOCOM",
          text:[
            "东京商品交易所（The Tokyo Commodity Exchange，TOCOM） ，又称东京工业品交易所，于1984年11月1日在东京建立。是世界上最大的铂金和橡胶交易所、日本唯一的一家综合商品交易所。",
            "TOCOM成立于1984年11月1日，它合并了东京纺织品交易所(成立于1951年)、东京橡胶交易所(1952)和东京黄金交易所(1982)。从成交量意义上说，TOCOM是世界上最大的铂、汽油、煤油和橡胶的期货市场，同时还是黄金的第二大交易市场。",
            "TOCOM是日本唯一的一家综合商品交易所，主要进行期货交易，并负责管理在日本进行的所有商品的期货及期权交易。该所经营的期货合约的范围很广，是世界上为数不多的交易多种贵金属的期货交易所。交易所对棉纱、毛线和橡胶等商品采用集体拍板定价制进行交易，对贵金属则采用电脑系统进行交易。该所以贵金属交易为中心，同时近年来大力发展石油，汽油，气石油等能源类商品。",
            "TOCOM商品期货：橡胶、铂金。",
          ]
        },
        {
          title:"8.马来西亚衍生品交易所BMD",
          text:[
            "马来西亚交易所成立于1973年，前身是吉隆坡证券交易所，2004年更名为Bursa Malaysia，成为一个多样化的国际性交易所。BMD包括证券交易所、衍生品交易所等，衍生品方面主要交易品种为棕榈油。 ",
            "BMD商品期货：棕榈油。"
          ]
        },
        {
          title:"9.迪拜黄金与商品交易所DGCX",
          text:[
            "迪拜黄金商品交易所（简称DGCX）是迪拜一家金融和商品交易所，2005年开始运营，是非洲中东部和北部地区第一家交易所，隶属于迪拜多商品交易中心。迪拜位于远东地区和欧洲之间的一个中间时区，因此可以为全球的投资者、区域综合开发、国际贸易交易等提供更多的时间，这也是吸引众多国际投资者的一点。",
            "DGCX商品期货：聚丙烯。"
          ]
        },
      ]
    }
  }
}
</script>

<style>
@import './style.css';
</style>
