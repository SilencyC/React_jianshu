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
  background-color: #fff;
  margin-top: 60px;
  padding: 50px 50px 30px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const InputBox = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 700;
  color: #ea6f5a;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 50px;
  line-height: 1.1;
`;

export const User = styled.input`
  width: 298px;
  height: 50px;
  padding: 4px 12px 4px 35px;
  border: none;
  outline: none;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  background-color: hsla(0, 0%, 71%, 0.1);
  border-radius: 4px 4px 0 0;
  &::placeholder {
    color: #c8c8c8;
  }
`;

export const Password = styled(User)`
  border-top: none;
  border-radius: 0px 0px 4px 4px;
`;

export const LoginButton = styled.div`
  height: 43px;
  background-color: #3194d0;
  border-radius: 21.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
