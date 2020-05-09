import styled from 'styled-components';
import logo_login from '../../statics/logo-login.png';

export const LoginWarp = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: #f1f1f1;
`;

export const LogoWarp = styled.div`
  margin: 58px 0 0 50px;
  width: 100px;
  height: 46px;
  background-image: url(${logo_login});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginContent = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
  margin-top: 60px;
  padding: 50px 50px 30px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 700;
  color: #ea6f5a;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
