describe('Module: fdaApi.event.locationField', function () {
  beforeEach(module('fdaApi.event.locationField'));

  describe('Service: locationFieldService', function () {
    var locationFieldService, LocationField, WORLDWIDE = 1, UNITEDSTATES = 2;

    beforeEach(inject(function ($injector) {
      locationFieldService = $injector.get('locationFieldService');
      LocationField = $injector.get('LocationField');
    }));

    describe('buildWorldwide', function () {
      it('returns expected field', function () {
        var expectedField = new LocationField(WORLDWIDE);
        var returnedField = locationFieldService.buildWorldwide();
        expect(returnedField).toEqual(expectedField);
      });
    });

    describe('buildUnitedStates', function () {
      it('returns expected field', function () {
        var expectedField = new LocationField(UNITEDSTATES);
        var returnedField = locationFieldService.buildUnitedStates();
        expect(returnedField).toEqual(expectedField);
      });
    });
  });
});