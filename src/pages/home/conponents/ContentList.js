import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';
import { ContentWarp, ContentItem, Content, LoadContent } from '../style';

class ContentList extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <ContentWarp>
        {list.map((item, index) => {
          return (
            <ContentItem key={index}>
              {/* <img className="content_pic" src={item.get('imgUrl')} alt="" /> */}
              {this.getImg(item.get('imgUrl'))}
              <Content className={item.get('imgUrl') ? '' : 'content_item'}>
                <Link to="details">
                  <h3>{item.get('title')}</h3>
                </Link>
                <p>{item.get('content')}</p>
              </Content>
            </ContentItem>
          );
        })}
        <LoadContent onClick={() => getMoreList(page)}>阅读更多</LoadContent>
      </ContentWarp>
    );
  }

  getImg = (imgUrl) => {
    if (imgUrl) {
      return (
        <Link to="details">
          <img className="content_pic" src={imgUrl} alt="" />{' '}
        </Link>
      );
    } else {
      return null;
    }
  };
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'contentList']),
    page: state.getIn(['home', 'page']),
  };
};

//发送ajax数据的流程：
//1、绑定click事件，点击时派发action，借助redux-thunk中间件在action里面去写异步操作
//2、请求到数据之后，派发一个同步的action ，store 接收到这个action后，将它直接派发给reducer，reducer接收到这个同步的action，去改变数据并返回给store
//3、store里面的数据变了，页面就跟着发生变化
const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList: (page) => {
      dispatch(actionCreator.getMoreListData(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
