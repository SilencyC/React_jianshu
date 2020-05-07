import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardWarp, CardItem } from '../style';

class CardList extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <CardWarp>
        {list.map((item) => {
          return (
            <CardItem key={item.get('id')}>
              <img className="card_pic" src={item.get('imgUrl')} alt="" />
              {item.get('name')}
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
