import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }
  render() {
    const { clickLogin, isLogin } = this.props;
    const { user, password } = this.state;
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
                  value={this.state.user}
                  placeholder="手机号码或邮箱"
                  onChange={this.getUser}
                ></User>
                <Password
                  value={this.state.password}
                  placeholder="密码"
                  type="password"
                  onChange={this.getPassword}
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
  }

  
  getUser = (e) => {
    const value = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        user: value,
      };
    });
  };
  getPassword = (e) => {
    const value = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        password: value,
      };
    });
  };
  componentDidMount() {
    this.props.changeIsShowHeader(false);
  }
  componentWillUnmount() {
    this.props.changeIsShowHeader(true);
  }
}

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
      const loginData = {
        user,
        password,
      };
      dispatch(actionCreators.handleLogin(loginData));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Login);
