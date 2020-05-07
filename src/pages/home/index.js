import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './conponents/CardList';
import ContentList from './conponents/ContentList';
import Recommend from './conponents/Recommend';
import Writer from './conponents/Writer';
import { HomeWarp, HomeLeft, HomeRight, ScrollTop } from './style';
import { actionCreator } from './store';

class Home extends Component {
  render() {
    const { showScroll } = this.props;
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
        {/* {showScroll ? (
          <ScrollTop onClick={this.scrollToTop}>顶部</ScrollTop>
        ) : null} */}
        {this.setScrollTop(showScroll)}
      </div>
    );
  }

  setScrollTop = (showScroll) => {
    if (showScroll) {
      return <ScrollTop onClick={this.scrollToTop}>顶部</ScrollTop>;
    } else {
      return null;
    }
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  binEvent = () => {
    //为window绑定scroll事件
    window.addEventListener('scroll', this.props.setIsShowScrollTop);
  };

  componentDidMount() {
    this.props.getHomeList();
    this.binEvent();
  }
  componentWillUnmount() {
    //为window解绑scroll事件
    window.removeEventListener('scroll', this.props.setIsShowScrollTop);
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList: () => {
      dispatch(actionCreator.getHomeList());
    },
    setIsShowScrollTop: () => {
      //获取滚动条顶部到document顶部的距离
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreator.changeScrollTopShow(true));
      } else {
        dispatch(actionCreator.changeScrollTopShow(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
