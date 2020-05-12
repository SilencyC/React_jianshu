import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { DetailsWarp, DetailsContent, Content } from './style';

const Details = (props) => {
  const { title, content, getDetails } = props;

  useEffect(() => {
    bindEvent();
    getDetails(props.match.params.id);
  }, []);

  const bindEvent = () => {
    window.scrollTo(0, 0);
  };

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
};

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
