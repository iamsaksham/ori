import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chatPopup state domain
 */

const selectChatPopupDomain = state => state.chatPopup || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChatPopup
 */

const makeSelectChatPopup = () =>
  createSelector(
    selectChatPopupDomain,
    substate => substate,
  );

export default makeSelectChatPopup;
export { selectChatPopupDomain };
