<template>
  <div :class="ChatEmpty['empty-body']">
    <BaseIcon name="chat" :class="ChatEmpty['icon']" />
  </div>
</template>

<script setup>
</script>

<style lang="less" module="ChatEmpty">
.empty-body {
  flex: 1;
  background-color: @bg-dk1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid @border-gray;
  border-top: none;
  border-bottom: none;

  & .icon {
    width: 40%;
    height: 40%;
  }
}
</style>
