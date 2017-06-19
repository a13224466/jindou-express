// require("../stylesheets/style.scss");
import '../stylesheets/style.scss';
import _ from 'lodash';

if (module.hot) { // 
  module.hot.accept()
}

function component() {
  console.log(_.join(['ni1', 'ha21o2   ', 'a', 'liaoasdf21'], ''));
}
component();

console.log(__dirname);