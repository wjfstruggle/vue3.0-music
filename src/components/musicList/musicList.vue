<template>
  <div class="musicList">
    <ul class="music-song-detail">
      <li class="music-item" v-for="newsong in newsongs" :key="newsong.id">
        <div class="detail">
          <h1 class="name textOverflow1">{{newsong.name}}</h1>
          <div class="artists-name">
            <i></i>
            <span class="textOverflow1" v-for="itemName in newsong.song.artists" :key="itemName.id">{{itemName.name}}-</span>
            <span class="textOverflow1">{{newsong.name}}</span>
          </div>
        </div>
        <div class="play-icon">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    'newsongs': {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/sass/varaible.scss';
.musicList {
  padding: 0 10px;
  .music-song-detail {
    display: flex;
    flex-direction: column;
    .music-item {
      padding: 6px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .detail {
        width: 316px;
        .name {
          font-size: $font-size-theme;
          color: $color-text;
          line-height: 1.5;
        }
        .artists-name {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          font-size: 12px;
          color: #888;
          span {
            margin-right: 4px;
            &::last-child() {

            }
          }
          i {
            background: url('../../assets/image/icon/index_icon_2x.png') no-repeat;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            background-size: 166px 97px;
          }
        }
      }
      .play-icon {
        background: url('../../assets/image/icon/index_icon_2x.png') no-repeat;
        width: 22px;
        height: 22px;
        background-position: -24px 0;
        background-size: 166px 97px;
      }
    }
  }
}
</style>
