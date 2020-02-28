<template>
<view>
<view class='question-wrp'>
    <view class='question-item'>
        <view class='que-tag'>
            <text class='tag'>阅读</text>
            <text class='tag'>电子书</text>
            <text class='tag'>Kindle</text>
            <text class='tag'>书籍</text>
            <text class='tag'>文学</text>
        </view>
        <view class='que-title'>
            选择 Kindle 而不是纸质书的原因是什么？
        </view>
        <view class='que-content'>
            WEB前端*不靠谱天气预报员*想做代码小仙女
        </view>
        <view class='que-follow'>
            <view class='left'>
                <view class='watch'>
                    <image src='../../asset/images/eye.png'></image>
                    <text>3316</text>
                </view>
                <view class='comment'>
                    <image src='../../asset/images/comment2.png'></image>
                    <text>27</text>
                </view>
            </view>
            <view class='right'>
                关注
            </view>
        </view>
    </view>
    <view class='que-operate flex-wrp'>
        <view class='invite flex-item'>
            <image src='../../asset/images/invite.png'></image>
            <text>邀请回答</text>
        </view>
        <view class='write flex-item'>
            <image src='../../asset/images/write.png'></image>
            <text>写回答</text>
        </view>
    </view>
</view>
<view class='answer-feed'>
    <view class='feed-item'>
        <view class='feed-source'>
            <view>
                <view class='avatar'>
                    <image src='../../asset/images/icon1.jpeg'></image>
                </view>
                <text class='answer-name'>Rebecca</text>
            </view>
        </view>
        <view class='feed-content'>
            <view class='answer-body'>
                <view @tap="navigateTo('/pages/answer/answer')">
                    <text class='answer-txt'>难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </text>
                </view>
                <view class='answer-actions'>
                    <view class='like dot'>
                        <view>3.9K 赞同 </view>
                    </view>
                    <view class='comments dot'>
                        <view>254 评论 </view>
                    </view>
                    <view class='time'>
                        <view>2 个月前</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class='feed-item'>
        <view class='feed-source'>
            <view>
                <view class='avatar'>
                    <image src={img5}></image>
                </view>
                <text class='answer-name'>Rebecca</text>
            </view>
        </view>
        <view class='feed-content'>
            <view class='answer-body'>
                <view @tap="navigateTo('/pages/answer/answer')">
                    <text class='answer-txt'>难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的... </text>
                </view>
                <view class='answer-actions'>
                    <view class='like dot'>
                        <view>3.9K 赞同 </view>
                    </view>
                    <view class='comments dot'>
                        <view>254 评论 </view>
                    </view>
                    <view class='time'>
                        <view>2 个月前</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</view>
</view>
</template>

<script>
import './question.scss'

export default {
  methods: {
    navigateTo(url) {
      Taro.navigateTo({url:url})
    }
  }
}
</script>


