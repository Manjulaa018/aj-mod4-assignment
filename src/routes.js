(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/main.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menudata/templates/main-categories-template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
       return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/items/{shortName}',
    templateUrl: 'src/menudata/templates/main-item-detail.template.html',
    controller: "ItemController as itemList",
    resolve: {
      menuItems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
       return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  });

}

})();
