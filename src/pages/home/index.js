import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from './conponents/CardList';
import ContentList from './conponents/ContentList';
import Recommend from './conponents/Recommend';
import Writer from './conponents/Writer';
import { HomeWarp, HomeLeft, HomeRight, ScrollTop } from './style';
import { actionCreator } from './store';

//如果用PureComponent建议直接使用immutablejs来管理数据，不然还是用Component来管理数据，避免遇到坑
const Home = (props) => {
  const { showScroll, getHomeList, setIsShowScrollTop } = props;

  useEffect(() => {
    getHomeList();
    binEvent();
    return () => {
      //为window解绑scroll事件
      window.removeEventListener('scroll', setIsShowScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const setScrollTop = (showScroll) => {
    if (showScroll) {
      return <ScrollTop onClick={scrollToTop}>顶部</ScrollTop>;
    } else {
      return null;
    }
  };
  const binEvent = () => {
    //为window绑定scroll事件
    window.addEventListener('scroll', setIsShowScrollTop);
  };
  
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
      {setScrollTop(showScroll)}
    </div>
  );
};

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
