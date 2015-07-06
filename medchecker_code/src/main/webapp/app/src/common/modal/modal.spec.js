describe('Controller: ModalCtrl', function () {
  var scope, modalInstance;

  beforeEach(module('drugSearch.modal'));
  beforeEach(inject(function ($injector, $controller, $rootScope) {
    scope = $rootScope.$new();

    modalInstance = { close: function () {} };
    spyOn(modalInstance, 'close');

    $controller('ModalCtrl', {
      $scope: scope,
      $modalInstance: modalInstance
    });
  }));

  describe('ok', function () {
    it('calls modalInstance\'s close method', function () {
      scope.ok();
      expect(modalInstance.close).toHaveBeenCalled();
    });
  });
});