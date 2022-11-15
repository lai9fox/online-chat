
<template>
  <div :class="BaseInput['container']">
    <slot name="prefix"></slot>
    <input type="text" :class="BaseInput['input']" :placeholder="placeHolder">
    <slot name="suffix"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  placeHolder: {
    type: String,
    default: 'Search',
  }
});
</script>

<style lang="less" module="BaseInput">
.container {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @bg-dk2;
  border-radius: 8px;
  padding: 10px 12px;
  box-sizing: border-box;

  &:focus-within {
    outline: 1px solid #7B61FF;
  }
}

.input {
  color: @text-white;
  background-color: transparent;
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  line-height: 20px;
  font-size: 14px;
}
</style>
