<template>
  <div :class="Contact['container']">
    <div :class="Contact['gravator']">
      <img :src="contactInfo.userGravatorURI" alt="user gravator">
    </div>
    <div :class="Contact['info']">
      <div :class="Contact['title']">
        <span :class="Contact['name']">
          {{ contactInfo.userName }}
        </span>
        <span :class="Contact['time']">
          {{ lastContactTime }}
        </span>
      </div>
      <div :class="Contact['sub']">
        <span :class="Contact['latest']">{{ contactInfo.latestMessage }}</span>
        <span :class="Contact['unread']">{{ contactInfo.unread >= 99 ? 99 : contactInfo.unread }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  contactInfo: {
    type: Object,
    default: () => ({
      contactId: 'xxx-yyy-zzz',
      userName: 'TestBot',
      userGravatorURI: 'src/assets/image/user-2.png',
      lastContact: Date.now(),
      latestMessage: "Hello! I am TestBot, It's my honor to meet you!",
      unread: 99,
      message: [],
    }),
  }
});

const lastContactTime = computed(() => {
  const timeGap = Date.now() - props.contactInfo.lastContact;
  const d = new Date(props.contactInfo.lastContact);
  if (timeGap <= 24 * 60 * 60 * 100) {
    return `${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`;
  } else if (timeGap <= 24 * 60 * 60 * 100 * 2) {
    return 'Yesterday';
  } else if (timeGap <= 24 * 60 * 60 * 100 * 7) {
    const weekday = d.getDay();
    switch (weekday) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thuresday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  } else {
    return `${d.getFullYear()}-${d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1}-${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}`;
  }
});

</script>

<style lang="less" module="Contact">
.container {
  height: 76px;
  padding: 12px 24px;
  box-sizing: border-box;
  color: @text-white;
  display: flex;
  cursor: pointer;
  &:hover {
    background: @bg-dk3;
  }
}
.gravator {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
.info {
  // flex: 1;
  width: 216px;
}
.title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.name {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.time {
  font-size: 12px;
  line-height: 18px;
}
.sub {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.latest {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: @text-gray;
  font-size: 14px;
  line-height: 20px;
  flex: 1;
}
.unread {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: rgb(241, 224, 172);
  color: @text-dark;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
}
</style>
