/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/**
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import FloatingButton from 'components/FloatingButton';
import ChatPopup from 'containers/ChatPopup';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';

const Wrapper = styled.div`
  .chat-popup {
    display: block;
    position: fixed;
    bottom: 100px;
    right: 15px;
    z-index: 9;
    border-radius: 15px;
    box-shadow: 0 0 20px 0 #c3c3c3;
  }
`;

export function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });

  const [popupState, setPopupState] = useState('none');

  const hangleTogglePopup = () => {
    popupState === 'none' ? setPopupState('block') : setPopupState('none');
  };

  return (
    <Wrapper>
      <FloatingButton
        popupState={popupState}
        hangleTogglePopup={hangleTogglePopup}
      />

      <div className="chat-popup" style={{ display: popupState }}>
        <ChatPopup popupState={popupState} />
      </div>
    </Wrapper>
  );
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
