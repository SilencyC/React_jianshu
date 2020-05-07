import styled from 'styled-components';

export const HomeWarp = styled.div`
  padding-top: 30px;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  .home_left_pic {
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }
`;

export const HomeRight = styled.div`
  margin-left: 55px;
  width: 280px;
  float: left;
`;

export const CardWarp = styled.div`
  overflow: hidden;
  margin: 20px 0 10px 0;
  margin-left: -18px;
`;

export const CardItem = styled.div`
  background-color: #f7f7f7;
  margin: 0 0 18px 18px;
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  .card_pic {
    margin-right: 10px;
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;
