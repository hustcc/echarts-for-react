/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

// refs only work with mount, yes.

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false,
});
