<template>
  <div :class="Info['container']">
    <div :class="Info['header']">
      <BaseIcon name="close" @click="closeInfo" />
      <div>Contact info</div>
    </div>
    <div :class="Info['profile']">
      <img :class="Info['profile-img']" src="/src/assets/image/user124.png" alt="">
      <div :class="Info['profile-info']">
        <span :class="Info['profile-name']">Lara Mueller</span>
        <br>
        <span :class="Info['profile-phone']">+49 1522 792358</span>
      </div>
    </div>
    <div :class="Info['info']">
      <span :class="Info['info-title']">Info</span>
        <br>
      <span :class="Info['info-text']">Winter is coming...</span>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
const emits = defineEmits([
  'closeInfo',
]);

function closeInfo() {
  emits('closeInfo', false);
}
</script>

<style lang="less" module="Info">
.container {
  width: 280px;
  background: @bg-dk1;
  color: @text-white;
}
.header {
  height: 64px;
  padding: 20px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile {
  border-top: 1px solid @border-gray;
  height: 232px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid @border-gray;
  &-img {
    width: 124px;
    height: 124px;
  }
  &-phone {
    color: @text-gray;
    font-size: 14px;
  }
}
.info {
  height: 92px;
  border-bottom: 1px solid @border-gray;
  padding: 24px;
  box-sizing: border-box;
  &-text {
    font-size: 14px;
    color: @text-gray;
  }
}
</style>
