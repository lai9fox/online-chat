<template>
  <div>
    <div :class="SliderBar['header']">
      <img src="src/assets/image/user.png" alt="User Profile Gravator" :class="SliderBar['user-gravator']">
      <div :class="SliderBar['header-svg']">
        <SvgIcon name="new-chat" :class="SliderBar['header-icon']"></SvgIcon>
        <SvgIcon name="more" :class="SliderBar['header-icon']"></SvgIcon>
      </div>
    </div>
    <div :class="SliderBar['search']">

    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" module="SliderBar">
.header {
  height: 64px;
  background-color: @bg-dk1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  &-svg {
    width: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
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
}
</style>
