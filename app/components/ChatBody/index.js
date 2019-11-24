/**
 *
 * ChatBody
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  overflow: auto;
  padding: 10px 20px;
  .msg-sent {
    display: flex;
    flex-direction: row-reverse;
    .msg-text {
      max-width: 75%;
      padding: 20px;
      background-color: rgb(48, 71, 236);
      color: #fff;
      border-radius: 12px;
      margin: 10px 0;
      font-size: 15px;
      font-weight: 300;
    }
  }
  .msg-recevied {
    display: flex;
    .msg-text {
      max-width: 75%;
      padding: 20px;
      background-color: rgb(245, 245, 245);
      color: #000;
      border-radius: 12px;
      margin: 10px 0;
      font-size: 15px;
      font-weight: 300;
    }
  }
`;

function ChatBody({ chatHistory }) {
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <Wrapper>
      {chatHistory.map((item, key) => {
        const classVal = item.status === 'sent' ? 'msg-sent' : 'msg-recevied';
        return (
          <div className={classVal} key={key}>
            <div className="msg-text">{item.text}</div>
          </div>
        );
      })}
      <div
        style={{ float: 'left', clear: 'both' }}
        ref={el => {
          messagesEnd.current = el;
        }}
      />
    </Wrapper>
  );
}

ChatBody.propTypes = {
  chatHistory: PropTypes.array.isRequired,
};

export default ChatBody;
