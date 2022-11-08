<template>
  <div :class="ChatUser['content-body']">
    <div :class="ChatUser['header']"></div>
    <div :class="ChatUser['display']">
      <MessageList v-for="message in messageList" :message="message" />
    </div>
    <div :class="ChatUser['input']"></div>
  </div>
</template>

<script setup>
import MessageList from '@/components/MessageList.vue';
const props = defineProps({
  messageList: Array,
})
</script>

<style lang="less" module="ChatUser">
.content-body {
  flex: 1;
  background-color: @bg-dk1;
  border: 1px solid @border-gray;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
}

.header {
  height: 64px;
}
.display {
  flex: 1;
  background-color: @bg-dk3;
  border: 1px solid @border-gray;
  border-left: none;
  border-right: none;
  position: relative;
}

.input {
  height: 64px;
}
</style>
