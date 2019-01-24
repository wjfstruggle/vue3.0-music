<template>
  <div class="header">
    <div class="img">
      <img src="../../assets/image/icon/music.png" alt="">
    </div>
    <h1 class="title">网易云音乐</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/varaible.scss';
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    background: $color-background;
    .img {
      width: 25px;
      height: 25px;
      img {
        width: 100%;
        background-color: $color-background;
      }
    }
    .title {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
      margin-left: 14px;
    }
  }
</style>
