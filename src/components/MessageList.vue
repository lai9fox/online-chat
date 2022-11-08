<template>
  <div :class="MessageItem['container']">
    <div :class="[ message.trigger === 1 ? 'message-item-sent' : 'message-item-recevie', MessageItem['message-box'] ]">
      {{ message.content }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * @example
   * ```js
   * messageList = {
   *   sendTime: Date.now() - Math.ceil(Math.random() * 24 * 60 * 60 * 1000), // number timestamp
   *   trigger: Math.random() > 0.5 ? 0 : 1, // boolean
   *   content: 'What rational you a least, hand.'.repeat(Math.ceil(Math.random() * 4)),  // string
   * }
   * ```
   */
  message: {
    type: Object,
    default: () => ({}),
  }
});
</script>

<style lang="less">
.message-item-sent {
  background: @bg-msg-send;
  color: @text-dark;
  border-radius: 4px 0px 4px 4px;
  // right: 48px;
}
.message-item-recevie {
  background: @bg-msg-recevie;
  color: @text-white;
  border-radius: 0px 4px 4px 4px;
  // left: 48px;
}
</style>

<style lang="less" module="MessageItem">
.container {
  width: 80%;
}
.message-box {
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
  letter-spacing: 8%;
  margin-bottom: 22px;
  // position: absolute;
}
</style>
