<template>
  <span :class="SvgIcon['container']">
    <svg aria-hidden="true" :class="SvgIcon['svg']">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
  </span>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#fff',
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="less" module="SvgIcon">
.container {
  display: inline-block;
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.svg {
  height: 100%;
  width: 100%;
}
</style>
