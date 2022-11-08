<template>
  <div :class="HomePage['home']">
    <SliderBar :class="HomePage['slider']" @chatUserSelect="notice" />
    <RouterView :messageList="contactInfoRef" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import SliderBar from '@/components/SliderBar.vue';
const contactInfoRef = ref([]);
function notice(contactInfo) {
  contactInfoRef.value = contactInfo.message;
}
</script>

<style lang="less" module="HomePage">
.home {
  display: flex;
}

.slider {
  width: 320px;
  height: 100vh;
}

</style>
