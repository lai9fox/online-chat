<template>
  <div :class="MessageItem['container']">
    <div v-if="message.trigger === 1" :class="MessageItem['fill']" />
    <div :class="[ message.trigger === 1 ? 'message-item-sent' : 'message-item-recevie', MessageItem['message-box'] ]">
      {{ message.content }}
      <span :class="[ message.trigger === 1 ? 'time-right' : 'time-left']">
        {{ timeFormat(message.sendTime) }}
      </span>
    </div>
    <div v-if="message.trigger === 0" :class="MessageItem['fill']" />
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
function timeFormat(timestamp) {
  const now = Date.now();
  const t = new Date(timestamp);
  if (now - timestamp <= 1000 * 60 * 60 * 24) {
    return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
  } else {
    return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
  }
}
</script>

<style lang="less">
.time-right {
  font-size: 12px;
  line-height: 18px;
  color: @text-gray;
  position: absolute;
  bottom: -22px;
  right: 0;
}
.time-left {
  color: @text-gray;
  position: absolute;
  bottom: -22px;
  left: 0;
}
.message-item-sent {
  background: @bg-msg-send;
  color: @text-dark;
  border-radius: 4px 0px 4px 4px;
  right: 48px;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top: 12px solid @bg-msg-send;
    border-left: 12px solid @bg-msg-send;
    right: -24px;
    top: 0;
  }
}
.message-item-recevie {
  background: @bg-msg-recevie;
  color: @text-white;
  border-radius: 0px 4px 4px 4px;
  left: 48px;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top: 12px solid @bg-msg-recevie;
    border-right: 12px solid @bg-msg-recevie;
    left: -24px;
    top: 0;
  }
}
</style>

<style lang="less" module="MessageItem">
.container {
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 4px;
}
.fill {
  flex: 1;
}
.message-box {
  max-width: 80%;
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
  margin-bottom: 22px;
  position: relative;
}
</style>
