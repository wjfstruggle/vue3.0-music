<template>
  <div id="nav">
    <ul class="nav">
      <li>
        <router-link to="/">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/toplist">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>  
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/varaible.scss';
  #nav {
    position: fixed;
    top: 64px;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
  }
  .nav { 
    display: flex;
    height: 41px;
    width: 100%;
    align-items: center;
    flex-wrap: nowrap;
    border-bottom: 1px solid #ccc;
    li {
      flex: 1;
      width: 30%;
      height: 100%;
      line-height: 40px;
      text-align: center;
      font-weight: 400;
      a {
        flex: 1;
        color: $color-text;
        font-size: $font-size-theme;
        display: inline-block;
        &.router-link-exact-active {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>
