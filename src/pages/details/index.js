import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { DetailsWarp, DetailsContent, Content } from './style';

class Details extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailsWarp>
        <DetailsContent>
          <Content>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Content>
        </DetailsContent>
      </DetailsWarp>
    );
  }
  bindEvent = () => {
    window.scrollTo(0, 0);
  };
  componentDidMount() {
    this.bindEvent();
    this.props.getDetails(this.props.match.params.id);
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['details', 'detailsTitle']),
    content: state.getIn(['details', 'detailsContent']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDetails: (id) => {
      dispatch(actionCreators.getDetails(id));
    },
  };
};

export default connect(mapState, mapDispatch)(Details);
