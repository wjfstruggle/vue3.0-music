<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <mt-swipe :auto="5000" :continuous="true">
      <mt-swipe-item v-for="itemImg in banners" :key="itemImg.id">
        <img :src="itemImg.imageUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 推荐歌单 -->
    <section id="recommend-song">
      <h1 class="recommend-name">推荐歌单</h1>
      <div class="recommend-wrap">
        <ul>
          <li class="recommend-item" v-for="recomSong in recommendSong" :key="recomSong.id" @click="toRecommendDes(recomSong.id)">
            <div class="picUrl"><img v-lazy="recomSong.picUrl" alt="">
            <div class="playCount">
              <i class="iconfont icon-listener-"></i>
              <span class="count">{{(recomSong.playCount/10000).toFixed(1)}}万</span>
            </div>
            </div>
            <h3 class="recommend-text">{{recomSong.name}}</h3>
          </li>
        </ul>
      </div>
    </section>
    <!-- 最新音乐 -->
    <section id="recent-song">
      <h1 class="new-song">最新音乐</h1>
      <music-list :newsongs="newSongs"></music-list>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {apiPersonalized, apiBanner, apiPersonalizedNewsong} from '@/api/api.js'
import MusicList from '@/components/musicList/musicList';
export default {
  created() {
    this.recommend()
    this.Banner()
    this.newSong()
  },
  data() {
    return {
      recommendSong: [], // 推荐歌单
      banners: [], // 轮播图
      newSongs: [] // 最新音乐
    }
  },
  methods: {
    recommend() {
      apiPersonalized({}).then(res => {
        this.recommendSong = res.result;
      })
    },
    // 轮播图数据
    Banner() {
      apiBanner({}).then( res => {
        this.banners = res.banners
      })
    },
    newSong() {
      apiPersonalizedNewsong({}).then(res => {
        this.newSongs = res.result;
      })
    },
    toRecommendDes(id) {
      this.$router.push({
        name: 'PlaylistDetail',
        params: {
          id: id,
        }
      })
    }
  },
  components: {
    MusicList
  }
}
</script>
<style lang="scss" scoped>
@import '@/sass/varaible.scss';
  .recommend {
    position: relative;
    top: 106px;
    z-index: 10;
    overflow: hidden;
    .mint-swipe {
      overflow: hidden;
      position: relative;
      height: 138px;
      img {
        width: 100%;
      }
    }
    // 适应320px手机屏幕大小
    @media (max-width: 375px) and (min-width: 320px) {
    .mint-swipe {
      height: 124px;
    }
  }
}
@mixin h1Name {
  position: relative;
  display: inline-block;
  padding-left: 9px;
  margin-bottom: 14px;
  font-size: $font-size-theme;
  height: 20px;
  line-height: 20px;
  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    width: 2px;
    height: 16px;
    background-color: $color-theme;
  }
}
  // 推荐歌单
  #recommend-song {
    padding-top: 20px;
    .recommend-name {
      @include h1Name;
    }
    .recommend-wrap {
      position: relative;
      margin-bottom: 24px;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        .recommend-item{
          width: 125px;
          display: flex;
          flex-direction: column;
          padding-bottom: 16px;
          .picUrl {
            position: relative;
            width: 123px;
            height: 123px;
            img {
              width: 100%;
            }
          }
          .recommend-text {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding: 6px 2px 0 6px;
            line-height: 18px;
            font-size: $font-size-small-3;
            color: $color-text;
          }
        }
        // 适应320px手机屏幕大小
        @media (max-width: 375px) and (min-width: 320px) {
          .recommend-item {
            width: 100px;
            .picUrl {
            position: relative;
            width: 100px;
            height: 100px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
#recent-song {
  .new-song {
    @include h1Name;
  }
}
</style>

