/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

// 做enzyme根据react16做的配置
configure({
  adapter: new Adapter(),
  disableLifecycleMethods: false,
});
