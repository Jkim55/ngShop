angular.module('ngShop', ['ngRoute'])

angular.module('ngShop').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'aboutController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'contactController'
    })
    .when('/shop', {
      templateUrl: 'partials/shop.html',
      controller: 'shopController'
    })
    .when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'cartController'
    })
    .otherwise('/nope', {
      templateUrl: 'partials/error.html',
      controller: 'errorController'
    })
  $locationProvider.html5Mode(true)
})

// TODO: build out partials and controllers
// TODO: write out stories on waffle.io (forward tim the link, basic start up info, and link to my waffle)
