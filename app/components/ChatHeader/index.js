/**
 *
 * ChatHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgb(48, 71, 236) 0%,
    rgb(15, 34, 167) 100%
  );
  border-radius: 15px 15px 0 0;
  color: #fff;
  padding: 30px 30px 10px;
  .chat-title {
    font-size: 20px;
    font-weight: 200;
    margin-bottom: 7px;
  }
  .chat-desc {
    font-size: 16px;
    font-weight: 200;
    margin-bottom: 7px;
    opacity: 0.8;
  }
  .avatars {
    display: flex;
    // justify-content: space-around;
    margin: 10px 0px;
    .avatar-container {
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      .avatar-img {
        max-width: 60px;
        border-radius: 50px;
      }
      .avatar-text {
        margin: 5px auto;
        font-size: 16px;
        font-weight: 200;
        opacity: 0.7;
      }
    }
  }
`;

function ChatHeader() {
  return (
    <Wrapper>
      <div className="chat-title">Public Chat</div>
      <div className="chat-desc">
        We help your business grow by connecting you to your customers
      </div>
      <div className="avatars">
        <div className="avatar-container">
          <img
            className="avatar-img"
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3061352/avatar.png?width=90"
            alt="avatar"
          />
          <span className="avatar-text">Jane</span>
        </div>
        <div className="avatar-container">
          <img
            className="avatar-img"
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3061352/avatar.png?width=90"
            alt="avatar"
          />
          <span className="avatar-text">Jane</span>
        </div>
        <div className="avatar-container">
          <img
            className="avatar-img"
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3061352/avatar.png?width=90"
            alt="avatar"
          />
          <span className="avatar-text">Jane</span>
        </div>
      </div>
      <div className="chat-desc">The team typically replies in a day.</div>
    </Wrapper>
  );
}

ChatHeader.propTypes = {};

export default ChatHeader;
