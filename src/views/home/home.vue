<template>
  <div>
    <header class="mint-header">
      <div class="mint-header-button is-left"></div>
      <h1 class="mint-header-title">{{address.address}}</h1>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon"><i class="mintui mintui-more"></i></span>
        </button>
      </div>
    </header>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">Home</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
        <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">Chat</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">Phone</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-gear"></span>
        <div class="mui-media-body">Setting</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-more"></span>
        <div class="mui-media-body">more</div></a></li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="./images/1beb455c3f3e1337690eab7adfcb148c27881.jpg">
          <div class="mui-media-body">
            藤野造型
            <p class="mui-ellipsis">[22店通用]单人设计师精剪+洗吹+造型</p>
          </div>
          <div class="price">
            <span class="strong">98</span><span class="strong-color">元</span>
            <del>204元</del>
            <span class="line-right">
	                    已售41481
	            </span>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="./images/8d0bc8a87c7cba669867677c0bd4d103722784.jpg">
          <div class="mui-media-body">
            Fresh领鲜海鲜自助餐厅
            <p class="mui-ellipsis">[东门]单人（海鲜自助）</p>
          </div>
          <div class="price">
            <span class="strong">98</span><span class="strong-color">元</span>
            <del>204元</del>
            <span class="line-right">
	                    已售41481
	            </span>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="./images/dc9be0c28875a4603733533a0be0515e487009.jpg">
          <div class="mui-media-body">
            幸福西饼生日蛋糕
            <p class="mui-ellipsis">[深圳等]经典热荐全心全意/森林果王（2选1）1个，约2磅，心形</p>
          </div>
          <div class="price">
            <span class="strong">98</span><span class="strong-color">元</span>
            <del>204元</del>
            <span class="line-right">
	                    已售41481
	            </span>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="./images/efe447071cb4032283750a66b9d2f30b229699.jpg">
          <div class="mui-media-body">
            鱼库·不仅是一家烤鱼店
            <p class="mui-ellipsis">[会展中心]100元代金券1张，可叠加</p>
          </div>
          <div class="price">
            <span class="strong">98</span><span class="strong-color">元</span>
            <del>204元</del>
            <span class="line-right">
	                    已售41481
	            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['address'])
    }
  }
</script>

<style>
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    margin: 0 0 10px 0;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  .mui-table-view .mui-media-object{
    height: 65px;
    max-width: 65px;
  }
  .mui-table-view-cell p{
    font-size: 12px;
  }
  .price{
    font-size: 12px;
    color: #999999;
    margin: 2px 0 0 0;
  }
  .price .strong{
    font-size: 16px;
    color: orange;
    font-weight: bold;
  }
  .price .line-right{
    float: right;
  }
</style>
