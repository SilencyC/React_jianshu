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

export const ScrollTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border: 1px solid #dcdcdc;
  line-height: 50px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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

export const ContentWarp = styled.div``;

export const LoadContent = styled.div`
  margin: 30px 0 60px;
  height: 40px;
  background-color: #9b9b9b;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 15px;
`;

export const ContentItem = styled.div`
  padding: 15px 0 20px;
  border-bottom: 1px solid #f0f0f0;
  min-height: 100px;
  a {
    text-decoration: none;
  }
  .content_pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const Content = styled.div`
  width: 458px;
  h3 {
    color: #333;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  &.content_item {
    width: 100%;
  }
`;

export const RecommendWarp = styled.div``;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  margin-bottom: 6px;
`;
