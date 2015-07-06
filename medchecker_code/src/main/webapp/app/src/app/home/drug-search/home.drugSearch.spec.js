describe('Module: medchecker.home.drugSearch', function () {
  beforeEach(module('medchecker.home.drugSearch'));

  describe('Controller: DrugSearchCtrl', function () {
    var drugSearchListService, eventDataService, scope, deferred;

    beforeEach(inject(function ($injector, $rootScope, $controller, $q, $httpBackend) {
      $httpBackend.expectGET('apiKey').respond('200');

      eventDataService = $injector.get('eventDataService');
      drugSearchListService = $injector.get('drugSearchListService');
      scope = $rootScope.$new();
      deferred = $q.defer();

      $controller('DrugSearchCtrl', {
        drugSearchListService: drugSearchListService,
        eventDataService: eventDataService,
        $scope: scope
      });
    }));

    describe('onRemoveDrugClick', function () {
      it('calls drugSearchListService\'s onRemoveDrugClick with expected params', function () {
        var removalIndex = 1;
        spyOn(drugSearchListService, 'removeFromSearchList');
        scope.additionalDrugNames = ['advil', 'tylenol'];
        scope.$digest();

        scope.onRemoveDrugClick(removalIndex);

        expect(drugSearchListService.removeFromSearchList)
          .toHaveBeenCalledWith(removalIndex, scope.additionalDrugNames);
      });
    });

    describe('onAddDrugClick', function () {
      var drugName = 'Advil';
      var additionalDrugNames = ['Motrin', 'tylenol'];

      beforeEach(function () {
        spyOn(drugSearchListService, 'addToSearchList');

        scope.drugName = 'Advil';
        scope.additionalDrugNames = additionalDrugNames;
        scope.$digest();
      });

      it('calls drugSearchListService\'s onAddDrugClick with expectedParams', function () {
        scope.onAddDrugClick();
        expect(drugSearchListService.addToSearchList).toHaveBeenCalledWith(drugName,
          additionalDrugNames);
      });

      it('sets drugName to empty string', function () {
        scope.onAddDrugClick();
        scope.$digest();
        expect(scope.drugName).toEqual('');
      });
    });
  });

  describe('Service: drugSearchListService', function () {
    var drugSearchListService, modal;

    beforeEach(inject(function ($injector) {
      drugSearchListService = $injector.get('drugSearchListService');
      modal = $injector.get('$modal');
    }));

    describe('addToSearchList', function () {
      it('opens modal when item additional item count is greater than max of 3', function () {
        var drugList = ['Advil', 'Tylenol'];
        spyOn(modal, 'open');

        drugSearchListService.addToSearchList('Aspirin', drugList);
        expect(modal.open).not.toHaveBeenCalled();

        drugSearchListService.addToSearchList('Aleve', drugList);
        expect(modal.open).toHaveBeenCalled();
      });

      it('adds item to the drugList when additional item count is less than max of 3', function () {
        var drugList = ['Advil'];
        var expectedDrugs = ['Aspirin', 'Advil'];

        drugSearchListService.addToSearchList('Aspirin', drugList);

        expect(drugList).toEqual(expectedDrugs);
      });
    });

    describe('removeFromSearchList', function () {
      it('removes item at provided index', function () {
        var drugList = ['Advil', 'Tylenol'];
        var expectedDrugs = ['Advil'];
        var removalIndex = 1;

        drugSearchListService.removeFromSearchList(removalIndex, drugList);

        expect(drugList).toEqual(expectedDrugs);
      });
    });
  });
});