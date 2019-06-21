<template>
  <section>
    <ul class="mui-table-view" v-if="shops.length">
      <li class="mui-table-view-cell mui-media" v-for="shop in shops">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="`@/../static/image/shopList/${shop.image_path}`">
          <div class="mui-media-body">
            <div class="top-title">
              <h6>{{shop.name}}</h6>
              <span>
              <i v-for="support in shop.supports">{{support.icon_name}}</i>
            </span>
            </div>
            <div class="center-text">
              <star-score v-bind:score="shop.rating"></star-score>
              <p class="mui-ellipsis"><b>{{shop.rating}}</b>月售{{shop.recent_order_num}}单</p>
              <span>{{shop.delivery_mode.text}}</span>
            </div>
          </div>
          <div class="price">
            <span>￥{{shop.float_minimum_order_amount}}元起送 / 配送费￥{{shop.float_delivery_fee}}</span>
          </div>
        </a>
      </li>
    </ul>
    <img v-else src="../../common/images/list-bg.svg" alt="">
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import starScore from '../../components/starScore/starScore'
  export default {
    components: {
      starScore
    },
    computed: {
      ...mapState(['shops'])
    }
  }
</script>

<style>
  .top-title{
    overflow: hidden;
  }
  .top-title h6{
    float: left;
  }
  .top-title span{
    float: right;
  }
  .top-title span i{
    margin: 0 1px;
    font-size: 12px;
    font-style: normal;
    color: #999999;
  }
  .center-text{
    overflow: hidden;
  }
  .center-text .score{
    float: left;
    margin-right: 4px;
  }
  .center-text .mui-ellipsis{
    float: left;
  }
  .center-text b{
    color: orange;
    margin: 0 4px;
  }
  .center-text > span{
    float: right;
    font-size: 10px;
    color: green;
    line-height: 12px;
    margin-top: 5px;
    border: solid 1px green;
  }
  .top-title h6{
    font-size: 16px;
    color: #333333;
  }
</style>
