import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWarp, RecommendItem } from '../style';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWarp>
        {list.map((item) => {
          return (
            <RecommendItem
              key={item.get('id')}
              url={item.get('imgUrl')}
            ></RecommendItem>
          );
        })}
      </RecommendWarp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList']),
  };
};

export default connect(mapStateToProps, null)(Recommend);
