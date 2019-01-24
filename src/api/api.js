import { get } from './http.js'

// 定义接口

export const apiLoginCellphone = params => get('/login/cellphone', params) // 登录

export const apiLoginRefresh = params => get('/login/refresh', params) // 刷新登录

export const apiLoginOut = params => get('/logout', params) // 退出登录

export const apiUserDetail = params => get('/user/detail', params) // 获取用户详情

export const apiUserSubcount = params => get('/user/subcount', params) // 获取用户信息 , 歌单，收藏，mv, dj 数量

export const apiUserUpdate = params => get('/user/update', params) // 更新用户信息

export const apiArtists = params => get('/top/artists', params) // 热门歌手

export const apiPersonalized = params => get('/personalized', params) // 推荐歌单

export const apiPersonalizedNewsong = params => get('/personalized/newsong', params) // 推荐新音乐

export const apiPersonalizedDjprogram = params => get('/personalized/djprogram', params) // 推荐电台

export const apiProgramRecommend = params => get('/program/recommend', params) // 推荐节目

export const apiTopList = params => get('/top/list', params) // 排行榜

export const apiToplistArtist = params => get('/toplist/artist', params) // 歌手榜

export const apiArtistSub = params => get('/artist/sub', params) //收藏/取消收藏歌手

export const apiArtistSublist = params => get('/artist/sublist', params) //收藏的歌手列表

export const apiMvSub = params => get('/mv/sub', params) //收藏 MV

export const apiMvSublist = params => get('/mv/sublist', params) //收藏的 MV 列表

export const apiPlaylistCatlist = params => get('/playlist/catlist', params) //歌单分类

export const apiPlaylistHot = params => get('/playlist/hot', params) //热门歌单分类

export const apiTopPlaylist = params => get('/top/playlist', params) //歌单 ( 网友精选碟 )

export const apiTopPlaylistHighquality = params => get('/top/playlist/highquality', params) //获取精品歌单

export const apiRelatedPlaylist = params => get('/related/playlist', params) //相关歌单推荐

export const apiPlaylistDetail = params => get('/playlist/detail', params) //获取歌单详情

export const apiSongUrl = params => get('/song/url', params) //获取音乐 url

export const apiCheckMusic = params => get('/check/music', params) //音乐是否可用

export const apiSearch = params => get('/search', params) //搜索

export const apiSearchHot = params => get('/search/hot', params) //热索

export const apiPlaylistSubscribe = params => get('/playlist/subscribe', params) //收藏/取消收藏歌单

export const apiPlaylistTracks = params => get('/playlist/tracks', params) //对歌单添加或删除歌曲

export const apiLyric = params => get('/lyric', params) //获取歌词