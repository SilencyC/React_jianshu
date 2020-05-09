import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { constants as headerActionCreator } from '../../common/header/store'
import { LoginWarp, LoginBox, LogoWarp, LoginContent, Title } from './style';

class Login extends Component {
  render() {
    return (
      <LoginWarp>
        <Link to="/">
          <LogoWarp></LogoWarp>
        </Link>
        <LoginBox>
          <LoginContent>
            <Title>登录</Title>
          </LoginContent>
        </LoginBox>
      </LoginWarp>
    );
  }
  componentDidMount() {
    this.props.changeIsShowHeader(false);
  }
  componentWillUnmount() {
    this.props.changeIsShowHeader(true);
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    changeIsShowHeader: (isShowHeader) => {
      dispatch(headerActionCreator.setIsShowHeader(isShowHeader));
    },
  };
};

export default connect(null, mapDisPatchToProps)(Login);
