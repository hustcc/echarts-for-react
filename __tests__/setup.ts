/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

// refs only work with mount, yes.

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false,
});
