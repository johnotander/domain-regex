'use strict';

module.exports = function() {
  return /^(([a-z]{1})|([a-z]{1}[a-z]{1})|([a-z]{1}[0-9]{1})|([0-9]{1}[a-z]{1})|([a-z0-9][a-z0-9-]{1,61}[a-z0-9]))\.([a-z]{2,30}|[a-z0-9-]{2,20}\.[a-z]{2,13})$/i;
};
