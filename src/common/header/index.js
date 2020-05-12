import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { constants } from './store';
import { actionCreators } from '../../pages/login/store';
import {
  HeaderWrapBox,
  HeaderWrap,
  Logo,
  Nav,
  ButtonNav,
  NavItem,
  NavImg,
  NavSearchWarp,
  NavSearch,
  HotSearch,
  HotSearchTitle,
  HotSearchSwitch,
  HotSearchItem,
  Button,
} from './style';

const Header = (props) => {
  const {
    focused,
    handleFocus,
    handleBlur,
    list,
    isShowHeader,
    isLogin,
    logout,
  } = props;
  const handleLogin = (isLogin) => {
    if (isLogin) {
      return (
        <NavItem onClick={logout} className="right logo_in">
          退出
        </NavItem>
      );
    } else {
      return (
        <Link to="/login">
          <NavItem className="right logo_in">登录</NavItem>
        </Link>
      );
    }
  };
  if (isShowHeader) {
    return (
      <div>
        <HeaderWrapBox bgc="#fff">
          <HeaderWrap>
            {/* You should not use <Link> outside a <Router> */}
            <Link to="/">
              <Logo></Logo>
            </Link>
            <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left download">下载App</NavItem>
              <NavSearchWarp backgroundcolor="#969696">
                <CSSTransition
                  in={focused}
                  timeout={500}
                  classNames="my-search"
                >
                  <NavSearch
                    onFocus={() => handleFocus(list)}
                    onBlur={handleBlur}
                    className={focused ? 'focused' : ''}
                  ></NavSearch>
                </CSSTransition>
                {/* <div
                    className={
                      focused ? 'iconfont_search focused' : 'iconfont_search'
                    }
                  > */}
                <div className={`iconfont_search ${focused ? ' focused' : ''}`}>
                  <span className="iconfont">&#xe638;</span>
                </div>
                {hotSearch(props)}
              </NavSearchWarp>
            </Nav>
            <ButtonNav>
              <NavItem className="right">
                <i className="iconfont">&#xe636;</i>
              </NavItem>
              <NavItem className="right img">
                <NavImg></NavImg>
              </NavItem>
              {handleLogin(isLogin)}
              <Button className="reg">注册</Button>
              <Button className="write">
                <i className="iconfont">&#xe6e5;</i>
                写文章
              </Button>
            </ButtonNav>
          </HeaderWrap>
        </HeaderWrapBox>
      </div>
    );
  } else {
    return null;
  }
};

const hotSearch = (props) => {
  const {
    focused,
    list,
    mouseIn,
    page,
    totalPage,
    handleMouseEnter,
    handleMouseLeave,
    switchNext,
  } = props;
  const newList = list.toJS();
  const showList = newList.slice((page - 1) * 10, page * 10);
  if (focused || mouseIn) {
    return (
      <HotSearch
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HotSearchTitle>
          热门推荐
          <HotSearchSwitch
            //用箭头函数传参
            onClick={() => switchNext(page, totalPage, this.pineIcon.current)}
          >
            <span
              //ref使用React.createRef()或者用回调 (element)=> {this.pineIcon = element}
              //使用React.createRef()获取DOM元素需要this.pineIcon.current
              ref={(this.pineIcon = React.createRef())}
              className="iconfont pine"
            >
              &#xe851;
            </span>
            换一批
          </HotSearchSwitch>
        </HotSearchTitle>
        {/* 3、展示列表数据时Imutable的map方法与 js的 map 方法一致 */}
        {showList.map((item) => {
          return <HotSearchItem key={item}>{item}</HotSearchItem>;
        })}
      </HotSearch>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    // mouseIn: state.get("header").get("mouseIn")
    // focused: state.header.focused,
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    isShowHeader: state.getIn(['header', 'isShowHeader']),
    isLogin: state.getIn(['login', 'isLogin']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: (list) => {
      //当size等于0的时候才去请求数据
      list.size === 0 && dispatch(constants.getHotSearchList());
      dispatch(constants.handleFocus());
    },
    handleBlur: () => {
      dispatch(constants.handleBlur());
    },
    handleMouseEnter: () => {
      dispatch(constants.handleMouseEnter());
    },
    handleMouseLeave: () => {
      dispatch(constants.handleMouseLeave());
    },
    switchNext: (page, totalPage, pineIcon) => {
      let originAngle = pineIcon.style.transform.replace(/[^0-9]/gi, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      pineIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      dispatch(constants.switchNext(page, totalPage));
    },
    logout: () => {
      dispatch(actionCreators.setIsLogin(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
