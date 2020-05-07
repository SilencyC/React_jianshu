import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardWarp, CardItem } from '../style';

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <CardWarp>
        {list.map((item) => {
          return (
            <CardItem key={item.id}>
              <img className="card_pic" src={item.imgUrl} alt="" />
              {item.name}
            </CardItem>
          );
        })}
      </CardWarp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'cardList']),
  };
};

export default connect(mapStateToProps, null)(CardList);
