const load = require('bundle-loader!./fun.js');

load(function (param) {
  document.querySelector("#main").appendChild(param());
})