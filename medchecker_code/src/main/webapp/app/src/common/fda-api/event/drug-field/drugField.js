angular.module('fdaApi.event.drugField', [])
.factory('DrugField', function () {
  function DrugField (value, strName) {
    this.value = value;
    this.strName = strName;
  }

  return DrugField;
})
.service('drugFieldValueService', function () {
  this.buildValueString = function (drugNames) {
    var drugFieldValue = '';
    for (var i = 0; i < drugNames.length; i++){
      if (i !== 0){
        drugFieldValue += ' AND ';
      }
      drugFieldValue += 'patient.drug.medicinalproduct:"' + drugNames[i].replace(' ', '+') + '"';
    }

    return drugFieldValue;
  };
})
.service('drugStringService', function () {
  this.buildDrugNames = function (drugNames) {
    var message = '';

    for (var i = 0; i < drugNames.length; i++) {
      if (i === 0) {
        message = drugNames[0];
      }
      else {
        message += ' and ' + drugNames[i];
      }
    }

    return message;
  };
})
.service('drugFieldService', function (drugStringService, drugFieldValueService, DrugField) {
  this.buildField = function (drugNames) {
    var fieldValue = drugFieldValueService.buildValueString(drugNames);
    var drugNamesString = drugStringService.buildDrugNames(drugNames);
    return new DrugField(fieldValue, drugNamesString);
  };
});