(function(){
  'use strict';

  angular.module('Data')
  .controller('ItemController',ItemController);

  ItemController.$inject = ['menuItems'];

  function ItemController(menuItems){
    var itemList = this;
    console.log(menuItems.data.category);
    itemList.itemName = menuItems.data.category.name;
    itemList.menuItems = menuItems.data.menu_items;
  }
})();
