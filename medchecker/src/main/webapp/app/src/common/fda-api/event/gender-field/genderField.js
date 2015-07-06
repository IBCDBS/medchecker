angular.module('fdaApi.event.genderField', [])
.factory('GenderField', function () {
  function GenderField(sex) {
    switch (sex) {
      case 1:
        this.sex = 'Male';
        this.value = 'patient.patientsex:1';
        break;
      case 2:
        this.sex = 'Female';
        this.value = 'patient.patientsex:2';
        break;
      default:
        this.sex = 'Male & Female';
        this.value = '(patient.patientsex:1 patient.patientsex:2)';
        break;
    }
  }

  return GenderField;
})
.service('genderFieldService', function (GenderField) {
  var MALE = 1, FEMALE = 2;

  this.buildMale = function () {
    return new GenderField(MALE);
  };

  this.buildFemale = function () {
    return new GenderField(FEMALE);
  };

  this.buildBoth = function () {
    return new GenderField();
  };
});