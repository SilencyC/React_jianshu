import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { constants as headerActionCreator } from '../../common/header/store';
import { actionCreators } from './store';
import {
  LoginWarp,
  LoginBox,
  LogoWarp,
  LoginContent,
  Title,
  User,
  Password,
  InputBox,
  LoginButton,
} from './style';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { clickLogin, isLogin, changeIsShowHeader } = props;

  useEffect(() => {
    changeIsShowHeader(false);
    return () => {
      changeIsShowHeader(true);
    };
  }, [isLogin]);

  if (isLogin) {
    return <Redirect to="/" />;
  } else {
    return (
      <LoginWarp>
        <Link to="/">
          <LogoWarp></LogoWarp>
        </Link>
        <LoginBox>
          <LoginContent>
            <Title>登录</Title>
            <InputBox>
              <User
                value={user}
                placeholder="手机号码或邮箱"
                onChange={(e) => setUser(e.target.value)}
              ></User>
              <Password
                value={password}
                placeholder="密码"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Password>
            </InputBox>
            <LoginButton onClick={() => clickLogin(user, password)}>
              登录
            </LoginButton>
          </LoginContent>
        </LoginBox>
      </LoginWarp>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin']),
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    changeIsShowHeader: (isShowHeader) => {
      dispatch(headerActionCreator.setIsShowHeader(isShowHeader));
    },
    clickLogin: (user, password) => {
      if (!user || !password) return;
      const loginData = {
        user,
        password,
      };
      dispatch(actionCreators.handleLogin(loginData));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Login);
