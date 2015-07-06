describe('Module: fdaApi.event.genderField', function () {
  beforeEach(module('fdaApi.event.genderField'));

  describe('Service: genderFieldService', function () {
    var genderFieldService, GenderField, MALE = 1, FEMALE = 2;

    beforeEach(inject(function ($injector) {
      genderFieldService = $injector.get('genderFieldService');
      GenderField = $injector.get('GenderField');
    }));

    describe('buildBoth', function () {
      it('returns expected field object', function () {
        var expectedField = new GenderField();
        var returnedField = genderFieldService.buildBoth();
        expect(returnedField).toEqual(expectedField);
      });
    });

    describe('buildMale', function () {
      it('returns expected field object', function () {
        var expectedField = new GenderField(MALE);
        var returnedField = genderFieldService.buildMale();
        expect(returnedField).toEqual(expectedField);
      });
    });

    describe('buildFemale', function () {
      it('returns expected field object', function () {
        var expectedField = new GenderField(FEMALE);
        var returnedField = genderFieldService.buildFemale();
        expect(returnedField).toEqual(expectedField);
      });
    });
  });
});