angular.module('drugSearch.modal', [
  'ui.bootstrap'
])
.controller('ModalCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };
});