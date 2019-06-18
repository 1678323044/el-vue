<template>
  <div class="mint-msgbox-wrapper" style="position: absolute; z-index: 2009;">
    <div class="mint-msgbox" style="">
      <div class="mint-msgbox-header">
        <div class="mint-msgbox-title">提示</div>
      </div> <div class="mint-msgbox-content">
      <div class="mint-msgbox-message">确定执行此操作?</div>
      <div class="mint-msgbox-input" style="display: none;">
        <input placeholder="" type="text">
        <div class="mint-msgbox-errormsg" style="visibility: hidden;"></div>
      </div>
    </div>
      <div class="mint-msgbox-btns">
        <button class="mint-msgbox-btn mint-msgbox-cancel " style="">取消</button>
        <button class="mint-msgbox-btn mint-msgbox-confirm ">确定</button>
      </div>
    </div>
  </div>
</template>
