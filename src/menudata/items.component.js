(function(){
  'use strict';

  angular.module('Data')
  .component('itemdetail', {
  templateUrl: 'src/menudata/templates/itemdetail.template.html',
  bindings: {
    menuItems: '<'
  }
});
})();
