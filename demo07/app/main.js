require.ensure(['./fun.js'], function () {
  const fun = require('./fun.js');
  document.querySelector("#main").appendChild(fun());
})