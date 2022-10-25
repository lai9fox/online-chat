<template>
  <div>
    <div :class="SliderBar['header']">
      <img src="src/assets/image/user.png" alt="User Profile Gravator" :class="SliderBar['user-gravator']">
      <div :class="SliderBar['header-svg']">
        <BaseIcon name="new-chat" />
        <BaseIcon name="more" />
      </div>
    </div>
    <div :class="SliderBar['search']">
      <BaseInput>
        <template #suffix>
          <BaseIcon name="search" />
        </template>
      </BaseInput>
    </div>
    <div :class="SliderBar['stories']">
      <div :class="SliderBar['stories-title']">Stories</div>
      <div :class="SliderBar['stories-list']">
        <div :class="SliderBar['stories-add']">
          <BaseIcon name="plus" />
        </div>
        <div v-for="sUser in storiesUsersRec" :class="SliderBar['stories-user']">
          <img :src="sUser.gravator" alt="user gravator">
        </div>
      </div>
    </div>
    <div :class="SliderBar['message']">
      <div :class="SliderBar['message-title']">Message</div>
      <div :class="SliderBar['message-list']">

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const storiesUsers = [];
for (let i = 1; i <= 4; i++) {
  storiesUsers.push({
    gravator: `src/assets/image/user-${i}.png`,
    userId: `user-${i}`,
  });
}
const storiesUsersRec = reactive(storiesUsers);
</script>

<style lang="less" module="SliderBar">
.header {
  height: 64px;
  background-color: @bg-dk1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  box-sizing: border-box;

  &-svg {
    width: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.user-gravator {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}

.search {
  height: 76px;
  background-color: @bg-dk1;
  padding: 12px 16px 0 16px;
  box-sizing: border-box;
}

.stories {
  height: 144px;
  background-color: @bg-dk1;
  // padding: 24px;
  margin: 24px;
  box-sizing: border-box;
  border-top: 1px solid @border-gray;
  overflow: hidden;

  &-title {
    line-height: 32px;
    font-size: 24px;
    color: @text-white;
    margin-bottom: 16px;
  }

  &-list {
    display: flex;
  }
  &-add {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    background-color: rgb(241, 224, 172);
    border-radius: 50%;
  }
  &-user {
    width: 48px;
    height: 48px;
    margin: 0 8px;
  }
}

.message {
  background-color: @bg-dk1;
  border-top: 1px solid @border-gray;

  &-title {
    height: 56px;
    color: @text-white;
    padding: 12px 24px;
    box-sizing: border-box;
    line-height: 32px;
    font-size: 24px;
  }

  &-list {
    box-sizing: border-box;
  }
}
</style>
