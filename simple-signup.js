angular.module('SimpleSignup', [])

  .directive('optIn', function() {
    return {
      templateUrl: 'optin-template.html',
      restrict: 'E',
    };
  });
