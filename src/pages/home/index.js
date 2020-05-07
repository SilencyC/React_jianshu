import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './conponents/CardList';
import ContentList from './conponents/ContentList';
import Recommend from './conponents/Recommend';
import Writer from './conponents/Writer';
import { HomeWarp, HomeLeft, HomeRight } from './style';
import { actionCreator } from './store';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWarp>
          <HomeLeft>
            <img
              className="home_left_pic"
              src="https://wx3.sinaimg.cn/large/4c56dd36gy1gck2txatuhj21hc0u0b1h.jpg"
              alt=""
            />
            <CardList></CardList>
            <ContentList></ContentList>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWarp>
      </div>
    );
  }
  componentDidMount() {
    this.props.getHomeList();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList: () => {
      dispatch(actionCreator.getHomeList());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
