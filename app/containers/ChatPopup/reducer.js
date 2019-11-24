/*
 *
 * ChatPopup reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  chatHistory: [
    { text: "I'm an Intercom customer and have a question.", status: 'sent' },
    {
      text:
        'Welcome back! To point you in the right direction, what Intercom team were you hoping to speak with today?',
      status: 'received',
    },
    { text: 'Intercom Support', status: 'sent' },
    { text: 'Welcome back!', status: 'received' },
    {
      text:
        'Please provide your company name and email address so that we can find your account.',
      status: 'received',
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const chatPopupReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default chatPopupReducer;
