<template>
  <div :class="HomePage['home']">
    <SliderBar :class="HomePage['slider']" />
    <RouterView :class="HomePage['chat-body']" />
  </div>
</template>

<script setup>
import SliderBar from '@/components/SliderBar.vue';
</script>

<style lang="less" module="HomePage">
.home {
  display: flex;
}

.slider {
  width: 320px;
  height: 100vh;
}

.chat-body {
  flex: 1;
  background-color: @bg-dk1;
}
</style>
