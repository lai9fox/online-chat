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
}

.chat-body {
  flex: 1;
}
</style>
