/**
 *
 * FloatingButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FloatingButtonWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(48, 71, 236);
  border-radius: 50%;
  box-shadow: 0 0 10px 0 #666;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  // opacity: 0.8;

  font-size: 45px;
  color: white;
  text-align: center;
  // line-height: 70px;

  position: fixed;
  right: 50px;
  bottom: 50px;
  user-select: none;
  &:hover {
    box-shadow: 0 0 15px 0 #666;
    transform: scale(1.05);
  }
`;

function FloatingButton({ popupState, hangleTogglePopup }) {
  const rotation = popupState === 'block' && 'rotate(45deg)';
  return (
    <FloatingButtonWrapper
      onClick={hangleTogglePopup}
      style={{ transform: rotation }}
    >
      +
    </FloatingButtonWrapper>
  );
}

FloatingButton.propTypes = {
  popupState: PropTypes.string.isRequired,
  hangleTogglePopup: PropTypes.func.isRequired,
};

export default FloatingButton;
