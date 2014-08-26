(function() {

	var app = angular.module('store', []); 
  
  app.controller('StoreController', function($scope, $filter) { 
    $scope.products = productArray;
 
    $scope.changeInCartState = function(product) {
      product.inCart = product.inCart ? false : true;
    };

    $scope.getCart = function() {
      return $scope.products.filter(function(obj) {
        return obj.inCart == true;
      });
    };

    $scope.getCartPrice = function() {
      var result = 0;
      angular.forEach($scope.getCart(), function(product, i) {
        result += product.price;
      });
      return $filter('number')(result, 2);
    };

  });
  
  var productArray = [
    {
      name: 'Nike',
      price: 69.95,
      description: 'Quality shoes.',
      inCart: false,
    },
    {
      name: 'Adidas',
      price: 59.95,
      description: 'JVG.',
      inCart: false,
    },
    {
      name: 'Reebok',
      price: 29.95,
      description: 'Last season.',
      inCart: false,
    },
    {
      name: 'Karhu',
      price: 59.95,
      description: 'Hip.',
      inCart: false,
    },
  ];

})();
