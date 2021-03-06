/**
 *
 * ChatPopup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ChatHeader from 'components/ChatHeader';
import ChatBody from 'components/ChatBody';
import ChatInputBox from 'components/ChatInputBox';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectChatPopup from './selectors';
import reducer from './reducer';
import { sendMessage } from './actions';

const Wrapper = styled.div`
  max-width: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 #666;
`;

export function ChatPopup({ dispatch, chatPopup }) {
  useInjectReducer({ key: 'chatPopup', reducer });

  const { chatHistory } = chatPopup;

  return (
    <Wrapper>
      <ChatHeader />
      <ChatBody chatHistory={chatHistory} />
      <ChatInputBox handleSendMessage={text => dispatch(sendMessage(text))} />
    </Wrapper>
  );
}

ChatPopup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chatPopup: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chatPopup: makeSelectChatPopup(),
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

export default compose(withConnect)(ChatPopup);
