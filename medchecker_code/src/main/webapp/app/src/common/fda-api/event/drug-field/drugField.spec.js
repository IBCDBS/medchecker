describe('Module: fdaApi.event.drugField', function () {
  beforeEach(module('fdaApi.event.drugField'));

  describe('Service: drugFieldService', function () {
    var drugFieldService, drugStringService, drugFieldValueService, DrugField;

    beforeEach(inject(function ($injector) {
      drugFieldService = $injector.get('drugFieldService');
      drugStringService = $injector.get('drugStringService');
      drugFieldValueService = $injector.get('drugFieldValueService');
      DrugField = $injector.get('DrugField');
    }));

    describe('buildField', function () {
      it('returns DrugField object with expected value for one drug', function () {
        var drugs = ['Advil'];
        var expectedValue = 'patient.drug.medicinalproduct:"Advil"';
        var expectedStrVal = 'Advil';
        var expectedFieldObj = new DrugField(expectedValue, expectedStrVal);
        spyOn(drugStringService, 'buildDrugNames').andReturn(expectedStrVal);
        spyOn(drugFieldValueService, 'buildValueString').andReturn(expectedValue);

        var returnedFieldObj = drugFieldService.buildField(drugs);

        expect(returnedFieldObj.value).toEqual(expectedFieldObj.value);
        expect(returnedFieldObj.strName).toEqual(expectedFieldObj.strName);
      });

      it('returns DrugField object with expected value for multiple drugs', function () {
        var expectedStrVal = 'Advil and Aspirin';
        var expectedValue = 'patient.drug.medicinalproduct:"Advil"' +
          '+AND+patient.drug.medicinalproduct:"Tylenol"';
        var drugs = ['Advil'];
        var currentDrug = 'Aspirin';
        var expectedFieldObj = new DrugField(expectedValue, expectedStrVal);
        spyOn(drugStringService, 'buildDrugNames').andReturn(expectedStrVal);
        spyOn(drugFieldValueService, 'buildValueString').andReturn(expectedValue);

        var returnedFieldObj = drugFieldService.buildField(drugs, currentDrug);

        expect(returnedFieldObj.value).toEqual(expectedFieldObj.value);
        expect(returnedFieldObj.strName).toEqual(expectedFieldObj.strName);
      });
    });
  });

  describe('Service: drugStringService', function () {
    var drugStringService;

    beforeEach(inject(function ($injector) {
      drugStringService = $injector.get('drugStringService');
    }));

    describe('buildDrugNames', function () {
      it('returns expected drug string when given one drug', function () {
        var drugs = ['Advil'];
        var expectedDrugString = 'Advil';

        var returnedDrugString = drugStringService.buildDrugNames(drugs);

        expect(returnedDrugString).toEqual(expectedDrugString);
      });

      it('returns expected drug string when given multiple drugs', function () {
        var drugs = ['Advil', 'Tylenol', 'Aspirin'];
        var expectedDrugString = 'Advil and Tylenol and Aspirin';

        var returnedDrugString = drugStringService.buildDrugNames(drugs);

        expect(returnedDrugString).toEqual(expectedDrugString);
      });
    });
  });

  describe('Service: drugFieldValueService', function () {
    var drugFieldValueService;

    beforeEach(inject(function ($injector) {
      drugFieldValueService = $injector.get('drugFieldValueService');
    }));

    describe('buildValueString', function () {
      it('returns expected drug field value string when given one drug', function () {
        var drugs = ['Advil'];
        var expectedValueString = 'patient.drug.medicinalproduct:"Advil"';

        var returnedValueString = drugFieldValueService.buildValueString(drugs);

        expect(expectedValueString).toEqual(returnedValueString);
      });

      it('returns expected drug field value string when given multiple drugs', function () {
        var drugs = ['Advil', 'Tylenol'];
        var expectedValueString = 'patient.drug.medicinalproduct:"Advil"' +
          ' AND patient.drug.medicinalproduct:"Tylenol"';

        var returnedValueString = drugFieldValueService.buildValueString(drugs);

        expect(expectedValueString).toEqual(returnedValueString);
      });
    });
  });
});