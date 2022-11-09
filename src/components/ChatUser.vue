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
    <div :class="ChatUser['input']"></div>
  </div>
  <Transition name="contact">
    <ContactInfo v-show="contactInfoVisible" @closeInfo="contactInfoVisible = false" />
  </Transition>
</template>

<script setup>
import MessageList from '@/components/MessageList.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import { ref } from 'vue';
const props = defineProps({
  contactInfo: Object,
})

/**
 * 显示聊天对象的账户信息
 */
function showContactInfo() {
  contactInfoVisible.value = true;
}
const contactInfoVisible = ref(false);
</script>

<style lang="less">

.contact-enter-from {
  width: 0;
}

.contact-enter-active,
.contact-leave-active {
  transition: width 0.3s;
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

.input {
  height: 64px;
}

</style>
