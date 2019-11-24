/**
 *
 * ChatInputBox
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border-radius: 0 0 15px 15px;
  .chat-input {
    width: 100%;
    padding: 20px;
    outline: none;
    font-size: 15px;
    font-weight: 300;
    border-radius: 0 0 15px 15px;
    border: none;
    border-top: 1px solid #c3c3c3;
  }
`;

function ChatInputBox({ handleSendMessage }) {
  const [textMsg, setTextMsg] = useState('');

  const handleInputChange = e => {
    setTextMsg(e.target.value);
  };

  const handleCheckSubmit = e => {
    if (e.key === 'Enter') {
      // Cancel the default action, if needed
      e.preventDefault();
      if (textMsg.trim().length > 0) {
        handleSendMessage(textMsg);
        setTextMsg('');
      }
    }
  };

  return (
    <Wrapper>
      <input
        className="chat-input"
        type="text"
        name="text-message"
        value={textMsg}
        autoComplete="off"
        placeholder="Send a message..."
        onChange={handleInputChange}
        onKeyDown={handleCheckSubmit}
      />
    </Wrapper>
  );
}

ChatInputBox.propTypes = {
  handleSendMessage: PropTypes.func.isRequired,
};

export default ChatInputBox;
