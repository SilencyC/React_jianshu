import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContentWarp, ContentItem, Content } from '../style';

class ContentList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ContentWarp>
        {list.map((item) => {
          return (
            <ContentItem key={item.get('id')}>
              <img className="content_pic" src={item.get('imgUrl')} alt="" />
              <Content>
                <h3>{item.get('title')}</h3>
                <p>{item.get('content')}</p>
              </Content>
            </ContentItem>
          );
        })}
      </ContentWarp>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'contentList']),
  };
};

export default connect(mapStateToProps, null)(ContentList);
