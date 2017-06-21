import '../stylesheets/style.scss';
import _ from 'lodash';

if (module.hot) { // fix hot update 
  module.hot.accept()
}

function component() {
  console.log(_.join(['1112'], ''));
}
component();

console.log(__dirname);