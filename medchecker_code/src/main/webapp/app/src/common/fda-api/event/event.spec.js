describe('Module: fdaApi.event', function () {
  beforeEach(module('fdaApi.event'));

  describe('Service: eventDataService', function () {
    var eventDataService, httpBackend, drugFieldService, searchParamService;

    beforeEach(inject(function ($injector, $q) {
      eventDataService = $injector.get('eventDataService');
      httpBackend = $injector.get('$httpBackend');
      drugFieldService = $injector.get('drugFieldService');
      searchParamService = $injector.get('searchParamService');
      q = $injector.get('$q');
    }));

    describe('getEvents', function () {
      var promiseValue = 'dummy promise value';
      var dummyDrugNames = ['advil', 'tylenol'];
      var searchParam = 'search param string';
      var drugField = { value: 'drug field value' };
      var genderField = 'gender field value';
      var locationField = 'location field value';
      var periodField = 'period field value';

      beforeEach(function () {
        var dummyDeferred = {promise: promiseValue};
        spyOn(q, 'defer').andReturn(dummyDeferred);
        spyOn(drugFieldService, 'buildField').andReturn(drugField);
        spyOn(searchParamService, 'buildSearchParam').andReturn(searchParam);
      });

      it('calls searchParamService\'s buildSearchParam method with expected args', function () {
        eventDataService.getEvents(dummyDrugNames, genderField, locationField, periodField);
        expect(searchParamService.buildSearchParam).toHaveBeenCalledWith(drugField.value, genderField,
          locationField, periodField);
      });

      it('calls drugFieldService\'s buildField method with expected args', function () {
        eventDataService.getEvents(dummyDrugNames, genderField, locationField, periodField);
        expect(drugFieldService.buildField).toHaveBeenCalledWith(dummyDrugNames);
      });

      it('returns a data promise', function () {
        var returnedValue = eventDataService.getEvents(dummyDrugNames);
        expect(returnedValue).toEqual(promiseValue);
      });
    });
  });

  describe('Service: eventPercentageService', function () {
    var eventPercentageService, eventCountService;

    var providedReactions = [
      {term: 'HEADACHE', count: 25},
      {term: 'NAUSEAU', count: 25},
      {term: 'HYPERTENSION', count: 25},
      {term: 'DRUG INEFFECTIVE', count: 25}
    ];

    var expectedResults = [
      {term: 'HEADACHE', count: 25, percentage: 25},
      {term: 'NAUSEAU', count: 25, percentage: 25},
      {term: 'HYPERTENSION', count: 25, percentage: 25},
      {term: 'DRUG INEFFECTIVE', count: 25, percentage: 25}
    ];

    beforeEach(inject(function ($injector) {
      eventPercentageService = $injector.get('eventPercentageService');
      eventCountService = $injector.get('eventCountService');
    }));

    describe('calculatePercentages', function () {
      it('takes provided reactions and adds a calculated percentage attribute', function () {
        spyOn(eventCountService, 'getCount').andReturn(100);
        var returnedResults = eventPercentageService.calculatePercentages(providedReactions);
        expect(returnedResults).toEqual(expectedResults);
      });
    });
  });
});