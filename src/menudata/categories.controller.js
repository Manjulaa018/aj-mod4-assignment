(function(){
  'use strict';

  angular.module('Data')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject = ['items'];

  function CategoriesController(items){
    var categoriesList = this;
    categoriesList.items = items.data;
  }
})();
