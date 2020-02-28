<template>
     <view class='more'>
        <view class='user flex-wrp'>
          <view class='avatar flex-item'>
            <image class='userinfo-avatar' src='https://image.ibb.co/nKV5Cy/default_avatar.jpg' backgroundSize='cover'></image>
          </view>
          <view class='user-info flex-item'>
            <text class='userinfo-nickname'>阿集</text>
            <text class='edit'>查看或编辑个人主页</text>
          </view>
        </view>
        <view class='my'>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/eye.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的关注</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/star.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的收藏</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/draft.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的草稿</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/recent.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>最近浏览</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/book.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的书架</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/live.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的 Live</text>
            </view>
          </view>
          <view class='my-item flex-wrp'>
            <view class='myitem-icon flex-item' >
            <image class='myitem-img' src='../../asset/images/zhi.png'></image>
            </view>
            <view class='myitem-name flex-item'>
              <text>我的值乎</text>
            </view>
          </view>
        </view>
      </view>
</template>

<script>
import './more.scss'

export default {

}
</script>

