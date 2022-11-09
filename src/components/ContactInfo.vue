<template>
  <div :class="Info['container']">
    <div :class="Info['header']">
      <BaseIcon name="close" @click="closeInfo" />
      <div>Contact info</div>
    </div>
    <div :class="Info['profile']">
      
    </div>
    <div></div>
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
}
</style>
