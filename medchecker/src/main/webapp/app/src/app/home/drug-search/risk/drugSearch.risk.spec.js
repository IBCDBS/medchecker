describe('Module: medchecker.home.drugSearch.risk', function () {
  beforeEach(module('medchecker.home.drugSearch.risk'));

  describe('Service: suspectDrugService', function () {
    var suspectDrugService;
    beforeEach(inject(function ($injector) {
      suspectDrugService = $injector.get('suspectDrugService');
    }));

    describe('isSuspectDrug', function () {
      var eventDrugs = [
        { medicinalproduct: 'ADVIL', drugcharacterization: '3' },
        { medicinalproduct: 'ALEVE', drugcharacterization: '1' },
        { medicinalproduct: 'TYLENOL', drugcharacterization: '1' },
        { medicinalproduct: 'ASPIRIN', drugcharacterization: '2' }
      ];

      it('returns true when single search drug is suspect', function () {
        var searchDrugs = ['ALEVE'];
        var returnedResult = suspectDrugService.isSuspectDrug(eventDrugs, searchDrugs);

        expect(returnedResult).toBe(true);
      });

      it('returns true when single drug is a suspect and is lowercase', function () {
        var searchDrugs = ['aleve'];
        var returnedResult = suspectDrugService.isSuspectDrug(eventDrugs, searchDrugs);

        expect(returnedResult).toBe(true);
      });

      it('returns true when multiple search drugs are suspects', function () {
        var searchDrugs = ['ADVIL', 'TYLENOL'];
        var returnedResult = suspectDrugService.isSuspectDrug(eventDrugs, searchDrugs);

        expect(returnedResult).toBe(true);
      });

      it('returns false when single drug is not a suspect', function () {
        var searchDrugs = ['IBUPROFEN'];
        var returnedResult = suspectDrugService.isSuspectDrug(eventDrugs, searchDrugs);

        expect(returnedResult).toBe(false);
      });

      it('returns false when multiple drugs are not a suspect', function () {
        var searchDrugs = ['IBUPROFEN', 'ASPIRIN', 'ADVIL'];
        var returnedResult = suspectDrugService.isSuspectDrug(eventDrugs, searchDrugs);

        expect(returnedResult).toBe(false);
      });
    });
  });

  describe('Service: riskCalcService', function () {
    var riskCalcService, eventDataService, q, deferred, eventDeferment;

    beforeEach(inject(function ($injector) {
      riskCalcService = $injector.get('riskCalcService');
      eventDataService = $injector.get('eventDataService');
      q = $injector.get('$q');
      deferred = q.defer();
      eventDeferment = q.defer();
    }));

    describe('getRisk', function () {
      var drugNames = ['Advil', 'Tylenol', 'Motrin'],
        genderField = 'Male',
        locationField = 'US',
        periodField = '20150505 TO 20150606';

      beforeEach(function () {
        spyOn(q, 'defer').andReturn(deferred);
        spyOn(eventDataService, 'getEvents').andReturn(eventDeferment.promise);
      });

      it('returns a promise', function () {
        var returnedPromise = riskCalcService.getRisk(drugNames, genderField,
          locationField, periodField);
        expect(returnedPromise).toEqual(deferred.promise);
      });

      it('calls eventDataService\'s getEvents method with expected params', function () {
        riskCalcService.getRisk(drugNames, genderField, locationField, periodField);
        expect(eventDataService.getEvents).toHaveBeenCalledWith(drugNames, genderField,
          locationField, periodField);
      });
    });
  });

  describe('Service: scoreService', function () {
    var httpBackend, scoreService, q, deferred, scope;

    beforeEach(inject(function ($injector) {
      scoreService = $injector.get('scoreService');
      httpBackend = $injector.get('$httpBackend');
      q = $injector.get('$q');
      deferred = q.defer();

      var rootScope = $injector.get('$rootScope');
      scope = rootScope.$new();
    }));

    describe('getScore', function () {
      var dummyEvents = [];

      beforeEach(function () {
        httpBackend.when('POST', 'riskScore').respond(200);
        spyOn(q, 'defer').andReturn(deferred);
        spyOn(deferred, 'resolve');
      });

      it('returns promise', function () {
        var returnedPromise = scoreService.getScore(dummyEvents);
        httpBackend.flush();
        expect(returnedPromise).toEqual(deferred.promise);
      });

      it('posts to riskScore endpoint', function () {
        httpBackend.expectPOST('riskScore').respond(200);
        scoreService.getScore(dummyEvents);
        httpBackend.flush();
      });

      it('resolves promise on success', function () {
        scoreService.getScore(dummyEvents);
        httpBackend.flush();
        expect(deferred.resolve).toHaveBeenCalled();
      });

      afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
      });
    });
  });
});