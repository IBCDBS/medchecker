angular.module( 'medchecker.home', [
  'ui.router',
  'medchecker.home.drugSearch'
])
.config(function config( $stateProvider ) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      'main': {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      },
      'drugSearch@home': {
        controller: 'DrugSearchCtrl',
        templateUrl: 'home/drug-search/home.drugSearch.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
.controller('HomeCtrl', function ($scope) {});