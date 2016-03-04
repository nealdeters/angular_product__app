(function() {
  "use strict";

  angular.module("app").controller("productCtrl", 
    function($scope){

    $scope.products = [
      {
        product: "nerfball",
        price: 25,
      },
      {
        product: "wiffleball bat",
        price: 10,
      },
      {
        product: "heelies",
        price: 10000
      }
    ]

    $scope.cart = [

    ]

    $scope.addProductToCart= function(product) {
      $scope.products.slice(product, 1)
      $scope.cart.push(product)
    };

    window.scope = $scope;

  });

}());