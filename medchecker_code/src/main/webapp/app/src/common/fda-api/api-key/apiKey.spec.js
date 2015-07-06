describe('Service: apiKeyService', function () {
  var apiKeyService, q, deferred, httpBackend;

  beforeEach(module('fdaApi.apiKey'));
  beforeEach(inject(function ($injector) {
    apiKeyService = $injector.get('apiKeyService');
    httpBackend = $injector.get('$httpBackend');
    q = $injector.get('$q');
    deferred = q.defer();
  }));

  describe('getKey', function () {
    beforeEach(function () {
      httpBackend.whenGET().respond(200);
      spyOn(q, 'defer').andReturn(deferred);
      spyOn(deferred, 'resolve');
    });

    it('returns promise', function () {
      var returnedValue = apiKeyService.getKey();
      httpBackend.flush();
      expect(returnedValue).toEqual(deferred.promise);
    });

    it('calls apiKey endpoint', function () {
      httpBackend.expectGET('apiKey');
      apiKeyService.getKey();
      httpBackend.flush();
    });

    it('calls resolve on success', function () {
      apiKeyService.getKey();
      httpBackend.flush();
      expect(deferred.resolve).toHaveBeenCalled();
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });
  });
});