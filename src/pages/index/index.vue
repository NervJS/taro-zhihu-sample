<template>
  <view>
        <view class='search flex-wrp'>
          <view class='search-left flex-item'>
            <view class='flex-wrp'>
              <view class='flex1'><image src='../../asset/images/search.png'></image></view>
              <view class='flex6'><input type='text' placeholder='搜索话题, 问题或人' placeholderClass='search-placeholder' /></view>
            </view>
          </view>
          <view class='search-right flex-item'>
            <image @tap='updateList' src='../../asset/images/lighting.png'></image>
          </view>
        </view>
        <scroll-view class='container'
          scrollY
          scroll-with-animation
          scrollTop='0'
          lower-threshold='10'
          upper-threshold='10'
          style='height:300px'
          @scroll-to-upper='updateList'
          @scroll-to-lower='appendNextPageList'
        >
        <view class='txcenter' v-if="loading">加载中</view>
        <feed
          v-else
          v-for='item in list'
          :key="item.item"
          :feed-source-img='item.feed_source_img'
          :feed-source-name='item.feed_source_name'
          :feed-source-txt='item.feed_source_txt'
          :question='item.question'
          :answer-ctnt='item.good_num'
          :good-num='item.comment_num'
          :comment-num='item.commentNum'
        />
      </scroll-view>
  </view>
</template>

<script>
import './index.scss'
import Feed from '../../components/feed/feed.vue'

export default {
  components: {
    'feed': Feed
  },
  data () {
    return {
      loading: true,
      list: []
    }
  },
  methods: {
    updateList() {
      if (this.loading) {
        return
      }
      this.loading = true
      Taro.showLoading({title: '加载中'})
      Taro.request({
        url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      }).then(res => {
        Taro.hideLoading()
        if (res.data.success) {
          this.loading = false
          this.list = res.data.data
        }
      })
    },
    appendNextPageList() {
      if (this.state.loading) {
        return
      }
      this.loading = true
      Taro.showLoading({title: '加载中'})
      Taro.request({
        url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      }).then(res => {
        Taro.hideLoading()
        if (res.data.success) {
          this.list.push(...res.data.data)
          this.loading = false
        }
      })
    }
  }
}
</script>
