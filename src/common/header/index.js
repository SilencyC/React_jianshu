import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { constants } from "./store";
import {
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
} from "./style";

class Header extends Component {
  hotSearch = () => {
    const {
      focused,
      list,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
    } = this.props;
    if (focused || mouseIn) {
      return (
        <HotSearch
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HotSearchTitle>
            热门推荐
            <HotSearchSwitch>换一批</HotSearchSwitch>
          </HotSearchTitle>
          {/* 3、展示列表数据时Imutable的map方法与 js的 map 方法一致 */}
          {list.map((item) => {
            return <HotSearchItem key={item}>{item}</HotSearchItem>;
          })}
        </HotSearch>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, handleFocus, handleBlur } = this.props;
    return (
      <div>
        <HeaderWrap>
          <Logo></Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left download">下载App</NavItem>
            <NavSearchWarp>
              <CSSTransition in={focused} timeout={500} classNames="my-search">
                <NavSearch
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={focused ? "focused" : ""}
                ></NavSearch>
              </CSSTransition>
              <div
                className={
                  focused ? "iconfont_search focused" : "iconfont_search"
                }
              >
                <span className="iconfont">&#xe638;</span>
              </div>
              {this.hotSearch()}
            </NavSearchWarp>
          </Nav>
          <ButtonNav>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <NavItem className="right img">
              <NavImg></NavImg>
            </NavItem>
            <NavItem className="right logo_in">登录</NavItem>
            <Button className="reg">注册</Button>
            <Button className="write">
              <i className="iconfont">&#xe6e5;</i>
              写文章
            </Button>
          </ButtonNav>
        </HeaderWrap>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    // mouseIn: state.get("header").get("mouseIn")
    // focused: state.header.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      dispatch(constants.getHotSearchList());
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
