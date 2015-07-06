angular.module('fdaApi.event.locationField', [])
.factory('LocationField', function () {
  function LocationField(location) {
    switch (location) {
      case 1:
        this.strName = 'Worldwide';
        this.value = '';
        break;
      case 2:
        this.strName = 'United States';
        this.value = 'occurcountry:US';
        break;
    }
  }

  return LocationField;
})
.service('locationFieldService', function (LocationField) {
  var WORLDWIDE = 1, UNITEDSTATES = 2;

  this.buildWorldwide = function () {
    return new LocationField(WORLDWIDE);
  };

  this.buildUnitedStates = function () {
    return new LocationField(UNITEDSTATES);
  };
});