import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'
import Feed from '../../components/feed/feed.js'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import icon1 from '../../asset/images/icon1.jpeg'
import icon8 from '../../asset/images/icon8.jpg'
import icon9 from '../../asset/images/icon9.jpeg'
import more from '../../asset/images/more.png'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      loading:true,
      list:[]
    }
  }
  componentWillMount () { }

  componentDidMount () { 
    // 获取远程数据
    this.updateList()
  }

  componentWillUnmout () { }

  componentDidShow () { }

  componentDidHide () { }
  
  updateList() {
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          loading:false,
          list:res.data.data
        })
      }
    })
  }
  appendNextPageList() {
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          list: this.state.list.concat(res.data.data)
        })
      }
    })
  }
  render () {
    return (<ScrollView className='container'
        scrollY
        scrollWithAnimation
        scrollTop='0'
        lowerThreshold='10'
        upperThreshold='10'
        onScrolltoupper={this.appendNextPageList}
        onScrolltolower={this.appendNextPageList}
        >
        <View className="search flex-wrp">
          <View className="search-left flex-item">
              <View className="flex-wrp">
                <View className="flex1"><Image src={searchPng}></Image></View>
                <View className="flex6"><Input type="text" placeholder="搜索话题, 问题或人" placeholderClass="search-placeholder"/></View>
              </View>
          </View>
          <View className="search-right flex-item">
              <Image src={lightingPng}></Image>
          </View>
        </View>
        {
          this.state.loading 
          ? <View className="txcenter"><Text>加载中</Text></View>
          : this.state.list.map((item,index)=>{
          return <Feed {...item} key={index} />})
        }
      </ScrollView>
    )
  }
}

