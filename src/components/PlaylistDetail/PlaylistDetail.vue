<template>
  <div class="PlaylistDetail">
    <section class="playlist-head">
      <div class="bg-fitle" :style="{backgroundImage: `url(${playlist.coverImgUrl})`}"></div>
      <div class="playlist-wrap">
        <div class="imgWrap">
          <img class="imgWrap-c" :src="playlist.coverImgUrl" alt="">
          <span class="song">歌单</span>
          <div class="playCount">
            <i class="iconfont icon-listener-"></i>
            <span class="count">{{(playlist.playCount/10000).toFixed(1)}}万</span>
          </div>
        </div>
        <div class="content">
          <h1 class="name">{{playlist.name}}</h1>
          <div class="info">
            <div class="avatar">
              <img class="avatar-c" v-if="creator.avatarUrl" :src="creator.avatarUrl" alt="">
              <i></i>
            </div>
            <h3 class="nickname" v-if="creator.nickname" >{{creator.nickname}}</h3>
          </div>
        </div>
      </div>
    </section>
    <!-- 电影简介 -->
    <section class="movie-detail">
      <div class="playlist-intro">
        标签:
        <em v-for="tags in playlist.tags" :key="tags.id">{{tags}}</em>
      </div>
      <div class="description">
        简介:
        <p :class="{'textOverflow2': !arrowFag}">{{playlist.description}}</p>
        <i @click="arrow" class="arrow" :class="{'arrow-active': arrowFag}"><img src="../../assets/image/icon/arrow-prev.png" alt=""></i>
      </div>
    </section>
    <!-- 歌单列表 -->
    <section class="song-list">
      <music-list :newsongs="playlist.tracks"></music-list>
    </section>
  </div>
</template>
<script>
import {apiPlaylistDetail} from '@/api/api.js'
import MusicList from '@/components/musicList/musicList';
export default {
  created() {
    // 本地存储id
    if (this.$route.params.id !== null) {
      this.id = this.$route.params.id
    }else {
      this.id = JSON.parse(localStorage.getItem('id'))
    }
    this.$nextTick()
    this.PlaylistDetail()
  },
  data() {
    return {
      id: '',
      playlist: {},
      creator: {},
      arrowFag: false
    }
  },
  methods: {
    PlaylistDetail() {
      apiPlaylistDetail({
        id: this.id
      }).then(res => {
        this.playlist = res.playlist
        this.creator = res.playlist.creator
      })
    },
    // 箭头折叠
    arrow() {
      this.arrowFag = !this.arrowFag
    }
  },
  watch: {
    id(newValue) {
      localStorage.setItem('id', JSON.stringify(newValue))
    }
  },
  components: {
    MusicList
  }
}
</script>
<style lang="scss" scope>
@import '@/sass/varaible.scss';
  .PlaylistDetail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 101;
    .playlist-head {
      position: relative;
      padding: 30px 10px 30px 15px;
      overflow: hidden;
      .bg-fitle {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        filter: blur(20px);
        transform: scale(1.5);
      }
    }
    .playlist-wrap {
      display: flex;
      position: relative;
      z-index: 2;
      .imgWrap {
        flex: 0 0 126px;
        width: 126px;
        height: 126px;
        position: relative;
        .song {
          position: absolute;
          z-index: 3;
          top: 10px;
          left: 0;
          padding: 0 8px;
          height: 17px;
          color: #fff;
          font-size: 9px;
          text-align: center;
          line-height: 17px;
          background-color:$color-theme;
          border-top-right-radius: 17px;
          border-bottom-right-radius: 17px;
        }
        .playount {

        }
        .imgWrap-c {
          width: 100%;
        }
      }
      .content {
        margin-left: 16px;
        .name {
          padding-top: 1px;
          font-size: $font-size-theme;
          line-height: 1.3;
          color: #fefefe;
          height: 44px;
          display: -webkit-box;
          -webkit-box-pack: center;
        }
        .info {
          display: block;
          position: relative;
          margin-top: 20px;
          display: flex;
          align-items: center;
        }
        .avatar {
          position: relative;
          width: 30px;
          height: 30px;
          margin-right: 5px;
          i {
            display: block;
            position: absolute;
            right: -5px;
            bottom: 0;
            width: 12px;
            height: 12px;
            background-image: url('../../assets/image/icon/VStar.png');
            background-position: -40px 0;
            background-repeat: no-repeat;
            background-size: 75px auto;
          }
          .avatar-c {
            border-radius: 50%;
            width: 100%;
          }
        }
        .nickname {
          color: hsla(0,0%,100%,.7);
          font-size: $font-size-text;
        }
      }
    }
    .movie-detail {
      position: relative;
      margin: 0 10px 0 15px;
      padding-top: 10px;
      line-height: 19px;
      color: $color-text-6;
      .playlist-intro {
        margin-bottom: 10px;
        line-height: 20px;
        margin-right: -10px;
        font-size: $font-size-theme;
        em {
          display: inline-block;
          margin-right: 10px;
          padding: 1px 8px;
          font-size: 12px;
          color: $color-text-6;
          border: 1px solid rgba(0,0,0,.1);
          border-radius: 999px;
          font-size: $font-size-small;
        }
      }
      .description {
        @extend .playlist-intro;
        p {
          font-size: $font-size-small-3;
        }
        i {
          display: block;
          z-index: 3;
          width: 15px;
          height: 15px;
          transform: rotate(180deg);
          transition: all 1s ease;
          margin-top: 15px;
          img {
            display: block;
            width: 100%;
          }
        }
        .arrow-active {
          transform: rotate(0);
          transition: all 0.3s ease;
        }
      }
    }
    .song-list {
      z-index: 101;
      background: #fff;
    }
  }
</style>
