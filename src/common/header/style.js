import styled from "styled-components";
import nav_logo from "../../statics/nav-logo.png";
import nav_jsds from "../../statics/nav_jsds.png";

export const HeaderWrap = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  display: block;
  width: 100px;
  height: 100%;
  background-image: url(${nav_logo});
  background-size: contain;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Nav = styled.div`
  width: 945px;
  margin: 0 auto;
  margin: 0 auto;
  height: 100%;
  line-height: 57px;
  @media (max-width: 1100px) {
    width: 800px;
  }
`;

export const ButtonNav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 23px;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  right: 0px;
  padding-right: 12px;
`;
export const NavItem = styled.div`
  color: #333;
  &.left {
    float: left;
    font-size: 17px;
    padding: 0 15px;
  }
  &.right {
    float: right;
    font-size: 15px;
    padding: 0 11px;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &.img {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &.logo_in {
    padding-left: 24px;
  }
  &.download:hover {
    background-color: #f5f5f5;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NavImg = styled.img.attrs({
  src: nav_jsds,
})`
  height: 25px;
`;

export const NavSearchWarp = styled.div`
  float: left;
  position: relative;
  .iconfont_search {
    display: inline-block;
    position: absolute;
    right: 5px;
    top: 53%;
    transform: translate(0, -50%);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &.focused {
      width: 30px;
      background-color: #969696;
      .iconfont {
        color: #fff;
      }
    }
  }
  .focused {
    width: 320px;
  }
`;

export const HotSearch = styled.div`
  position: absolute;
  top: 56px;
  left: 25px;
  /* width: calc(100% - 25px); */
  width: 320px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const HotSearchTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`;

export const HotSearchSwitch = styled.span`
  float: right;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;

export const HotSearchItem = styled.span`
  display: block;
  float: left;
  border: 1px solid #969696;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #787878;
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  margin-left: 25px;
  width: 240px;
  box-sizing: border-box;
  height: 38px;
  border-radius: 19px;
  padding: 0 40px 0 20px;
  color: #777;
  border: none;
  outline: none;
  background-color: #eee;
  font-size: 15px;
  &::placeholder {
    color: #666;
  }
  &.my-search-enter {
    width: 240px;
  }
  &.my-search-enter-active {
    width: 320px;
    transition: width 500ms;
  }
  &.my-search-exit {
    width: 320px;
  }
  &.my-search-exit-active {
    width: 240px;
    transition: width 500ms;
  }
`;

export const Button = styled.div`
  float: right;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 19px;
  &.reg {
    border: 1px solid rgba(236, 97, 73, 0.7);
    width: 80px;
    color: #ea6f5a;
    margin-right: 17px;
    margin-left: 22px;
  }
  &.write {
    background-color: #ea6f5a;
    width: 100px;
    color: #fff;
  }
`;
