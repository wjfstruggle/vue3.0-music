<template>
  <div class="musicList">
    <ul class="music-song-detail">
      <li class="music-item" v-for="newsong in newsongs" :key="newsong.id" @click="toRecommend(newsong.id)">
        <div class="detail">
          <h1 class="name textOverflow1">{{newsong.name}}</h1>
          <div class="artists-name">
            <i></i>
            <div v-if="newsong.song">
              <span class="textOverflow1" v-for="itemName in newsong.song.artists" :key="itemName.id">{{itemName.name}}-</span>
              <span class="textOverflow1">{{newsong.name}}</span>
            </div>
            <div v-if="newsong.al">
              <span class="textOverflow1">{{newsong.al.name}}</span>
            </div>
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
  },
  methods: {
    toRecommend(id) {
      this.$emit('recDetail', id)
    }
  },
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
      padding: 8px 0;
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
          width: 300px;
          overflow: hidden;
          span {
            margin-right: 4px;
          }
          i {
            background: url('../../assets/image/icon/index_icon_2x.png') no-repeat;
            flex: 0 0 12px;
            width: 12px;
            height: 8px;
            margin-right: 4px;
            background-size: 166px 97px;
          }
        }
       @media (max-width: 375px) and (min-width: 320px) {
        .artists-name {
          width: 200px;
          }
        }
      }
      @media (max-width: 375px) and (min-width: 320px) {
        .detail {
          width: 260px;
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
