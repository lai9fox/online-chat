<template>
  <div :class="ChatUser['content-body']">
    <div :class="ChatUser['header']">
      <img :src="contactInfo.userGravatorURI" :class="ChatUser['gravator']" alt="user gravator" />
      <div :class="ChatUser['username']">
        {{ contactInfo.userName }}
      </div>
      <div :class="ChatUser['operation']">
        <BaseIcon name="search" />
        <BaseIcon name="more" @click="showContactInfo" />
      </div>
    </div>
    <div :class="ChatUser['display']">
      <MessageList v-for="message in contactInfo.message" :message="message" />
    </div>
    <div :class="ChatUser['input']">
      <div v-show="inputType === 'text'" :class="ChatUser['text-input']">
        <BaseIcon name="smile" :class="ChatUser['text-input-item']" />
        <BaseIcon name="link" :class="ChatUser['text-input-item']" />
        <BaseInput placeHolder="Write a message" :class="ChatUser['text-input-item']" @keyup.enter="sendMessage" />
        <BaseIcon name="micro" :class="ChatUser['text-input-item']" @click="inputType = 'audio'" />
      </div>
      <div v-show="inputType === 'audio'" :class="ChatUser['audio-input']">
        <BaseIcon name="garbage" :class="ChatUser['audio-input-item']" />
        <span :class="[ChatUser['audio-input-item'], ChatUser['audio-time']]">
          {{ showAudioTime(audioFramesHeight.length) }}
        </span>
        <div :class="[ChatUser['audio-input-item'], ChatUser['audio']]">
          <span
            :class="ChatUser['audio-frame']"
            v-for="(frame, index) in audioFramesHeight"
            :key="index"
            :style="frame"
            >
          </span>
        </div>
        <BaseIcon name="stop" :class="ChatUser['audio-input-item']" />
        <BaseIcon name="send-plane" :class="ChatUser['audio-input-item']" @click="inputType = 'text'" />
      </div>
    </div>
  </div>
  <Transition name="contact">
    <ContactInfo
      v-show="contactInfoVisible"
      @closeInfo="contactInfoVisible = false"
    />
  </Transition>
</template>

<script setup>
import MessageList from '@/components/MessageList.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  contactInfo: Object,
})

// watch(() => props.contactInfo.contactId, (val) => {
//   console.log(val);
// })
const router = useRouter();
watchEffect(() => {
  if (!props.contactInfo.contactId) {
    router.push('/');
  }
})

/**
 * 显示聊天对象的账户信息
 */
function showContactInfo() {
  contactInfoVisible.value = true;
}
const contactInfoVisible = ref(false);

/**
 * 输入的内容形式，可选 'text' | 'audio'
 */
const inputType = ref('text');

/**
 * 声音输入
 */
const audioFramesHeight = ref([]);
for (let i = 1; i <= 100; i++) {
  audioFramesHeight.value.push(`height: ${Math.ceil(Math.random() * 20) + 2}px`);
}
function showAudioTime(len) {
  const seconds = len % 60;
  const min = parseInt(len / 60);
  return `${min <= 9 ? '0' + min : min} : ${seconds <= 9 ? '0' + seconds : seconds}`;
}

/**
 * 发送文本消息
 */
function sendMessage() {
  props.contactInfo.message.push({
    sendTime: Date.now() - Math.ceil(Math.random() * 24 * 60 * 60 * 1000), // number timestamp
    trigger: Math.random() > 0.5 ? 0 : 1, // boolean
    content: 'message reply.'.repeat(Math.ceil(Math.random() * 4)),  // string
  })
  console.log('send...');
}
</script>

<style lang="less">

.contact-enter-from {
  width: 0;
}

.contact-enter-active,
.contact-leave-active {
  transition: all 0.3s;
}

.contact-leave-to {
  width: 0;
}

</style>
<style lang="less" module="ChatUser">
.content-body {
  flex: 1;
  height: 100vh;
  background-color: @bg-dk1;
  border: 1px solid @border-gray;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
}

.header {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
.gravator {
  width: 40px;
  height: 40px;
}
.username {
  flex: 1;
  color: @text-white;
  font-weight: 600;
  line-height: 24px;
  margin: 0 10px;
}
.operation {
  width: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.display {
  flex: 1;
  background-color: @bg-dk3;
  border: 1px solid @border-gray;
  border-left: none;
  border-right: none;
  position: relative;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: @bg-scroller;
  &::-webkit-scrollbar  {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: @bg-scroller;
    border-radius: 3px;
  }
}

.text-input {
  height: 64px;
  display: flex;
  padding: 12px 24px;
  box-sizing: border-box;
  align-items: center;
  &-item {
    margin: 0 5px;
  }
}
.audio-input {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  box-sizing: border-box;
  &-item {
    margin: 0 5px;
  }
}
.audio {
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  background-color: @bg-dk3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.audio-time {
  color: @text-white;
}
.audio-frame {
  width: 2px;
  border-radius: 1px;
  display: inline-block;
  margin: 0 1px;
  background-color: @text-gray;
}
</style>
