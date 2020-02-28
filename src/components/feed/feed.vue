<template>
<view class='feed-item'>
  <view class='feed-source'>
    <view class='avatar flex1'>
        <image class='avatar_img' :src='feedSourceImg'></image>
    </view>
    <view class='flex8'>
      <text class='feed-source-txt'>{{feedSourceName}}{{feedSourceTxt}}</text>
    </view>
    <view class='flex1'>
      <image class='item-more' mode='aspectFit' src='../../asset/images/more.png'></image>
    </view>
  </view>
  <view class='feed-content'>
      <view class='question' @tap="navigateTo('/pages/question/question')">
          <view class='question-link'>
              <text>{{question}}</text>
          </view>
      </view>
      <view class='answer-body'>
          <view>
              <text class='answer-txt' @tap="navigateTo('/pages/answer/answer')" >{{answerCtnt}}</text>
          </view>
          <view class='answer-actions'>
              <view class='like dot'>
                  <view>{{goodNum}} 赞同 </view>
              </view>
              <view class='comments dot'>
                  <view>{{commentNum}} 评论 </view>
              </view>
              <view class='follow-it'>
                  <view>关注问题</view>
              </view>
          </view>
      </view>
  </view>
</view>
</template>

<script>
import Taro from '@tarojs/taro'
import './feed.scss'

export default {
  props: ['feedSourceName', 'question', 'commentNum', 'feedSourceImg', 'feedSourceTxt', 'answerCtnt', 'goodNum'],
  methods: {
    navigateTo(url) {
      Taro.navigateTo({url:url})
    }
  }
}
</script>

<style>

</style>
