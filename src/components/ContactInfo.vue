<template>
  <div :class="Info['container']">
    <div :class="Info['header']">
      <BaseIcon name="close" @click="closeInfo" />
      <div>Contact info</div>
    </div>
    <div :class="Info['profile']">
      <img :class="Info['profile-img']" src="/src/assets/image/user124.png" alt="">
      <div :class="Info['profile-info']">
        <span :class="Info['profile-name']">Lara Mueller</span>
        <br>
        <span :class="Info['profile-phone']">+49 1522 792358</span>
      </div>
    </div>
    <div :class="Info['info']">
      <span :class="Info['info-title']">Info</span>
        <br>
      <span :class="Info['info-text']">Winter is coming...</span>
    </div>
    <div :class="Info['media']">
      <span :class="Info['media-title']">Media, Links and Documents</span>
      <div :class="Info['media-img']">
        <img src="/src/assets/image/media-1.png" alt="media">
        <img src="/src/assets/image/media-2.png" alt="media">
        <img src="/src/assets/image/media-3.png" alt="media">
      </div>
    </div>
    <div :class="Info['message']">
      <div :class="Info['message-marked']">
        <BaseIcon name="star" />
        <span :class="Info['message-text']">Marked messages</span>
        <BaseIcon name="right-arrow" />
      </div>
      <div :class="Info['message-marked']">
        <BaseIcon name="notify" />
        <span :class="Info['message-text']">Notifications</span>
        <BaseIcon name="right-arrow" />
      </div>
      <div :class="Info['message-marked']">
        <BaseIcon name="timer" />
        <span :class="Info['message-text']">Self Deleting Messages</span>
        <BaseIcon name="right-arrow" />
      </div>
    </div>
    <div :class="Info['setting']">
      <div :class="Info['setting-container']">
        <BaseIcon name="setting" />
        <span :class="Info['setting-text']">Settings</span>
        <BaseIcon name="right-arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits([
  'closeInfo',
]);

function closeInfo() {
  emits('closeInfo', false);
}
</script>

<style lang="less" module="Info">
.container {
  width: 280px;
  background: @bg-dk1;
  color: @text-white;
}
.header {
  height: 64px;
  padding: 20px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile {
  border-top: 1px solid @border-gray;
  height: 232px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid @border-gray;
  &-img {
    width: 124px;
    height: 124px;
  }
  &-phone {
    color: @text-gray;
    font-size: 14px;
  }
}
.info {
  height: 92px;
  border-bottom: 1px solid @border-gray;
  padding: 24px;
  box-sizing: border-box;
  &-text {
    font-size: 14px;
    color: @text-gray;
  }
}

.media {
  height: 146px;
  border-bottom: 1px solid @border-gray;
  padding: 24px 0 24px 24px;
  box-sizing: border-box;

  &-title {
    color: @text-gray;
    font-size: 14px;
  }

  &-img {
    overflow: hidden;
    height: 72px;
    width: 300px;
    img {
      margin-right: 4px;
    }
  }
}
.message {
  height: 216px;
  border-bottom: 1px solid @border-gray;
  padding: 24px;
  box-sizing: border-box;

  &-marked {
    padding: 8px 8px;
    box-sizing: border-box;
    height: 36px;
    border-radius: 4px;
    background-color: @bg-dk2;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
  }
  &-text {
    margin: 0 4px;
    flex: 1;
    font-size: 14px;
  }
}

.setting {
  padding: 24px 24px 0 24px;
  box-sizing: border-box;
  
  &-container {
    padding: 8px 8px;
    box-sizing: border-box;
    height: 36px;
    border-radius: 4px;
    background-color: @bg-dk2;
    display: flex;
    align-items: center;
  }
  &-text {
    flex: 1;
    margin: 0 4px;
    font-size: 14px;
  }
}
</style>
