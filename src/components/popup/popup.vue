<template>
  <div>
    <div class="mint-msgbox-wrapper" style="position: absolute; z-index: 2009;">
      <div class="mint-msgbox" style="">
        <div class="mint-msgbox-header">
          <div class="mint-msgbox-title">提示</div>
        </div> <div class="mint-msgbox-content">
        <div class="mint-msgbox-message">{{tipText}}</div>
        <div class="mint-msgbox-input" style="display: none;">
          <input placeholder="" type="text">
          <div class="mint-msgbox-errormsg" style="visibility: hidden;"></div>
        </div>
      </div>
        <div class="mint-msgbox-btns">
          <button class="mint-msgbox-btn mint-msgbox-confirm " @click="handleClose">确定</button>
        </div>
      </div>
    </div>
    <div class="v-modal" style="z-index: 2000;"></div>
  </div>
</template>

<script>
  export default {
    props: ['tipText'],
    methods: {
      handleClose(){
        this.$emit('closeTip')
      }
    }
  }
</script>
