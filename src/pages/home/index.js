import React, { Component } from 'react'
import { HomeWarp, HomeLeft, HomeRight } from './style'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWarp>
          <HomeLeft>
            <img className='home_left_pic' src="https://wx3.sinaimg.cn/large/4c56dd36gy1gck2txatuhj21hc0u0b1h.jpg" alt=""/>
          </HomeLeft>
          <HomeRight>HomeRight~</HomeRight>
        </HomeWarp>
      </div>
    )
  }
}

export default Home;