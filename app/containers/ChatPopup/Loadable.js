/**
 *
 * Asynchronously loads the component for ChatPopup
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
