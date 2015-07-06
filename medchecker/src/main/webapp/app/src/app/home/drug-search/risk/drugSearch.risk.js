angular.module('medchecker.home.drugSearch.risk', [
  'fdaApi.event'
])
.factory('Risk', function () {
  function Risk (serious, seriousnessDeath, drugCharacterization) {
    this.serious = serious;
    this.seriousnessDeath = seriousnessDeath;
    this.drugCharacterization = drugCharacterization;
  }
  return Risk;
})
.service('scoreService', function ($http, $q) {
  this.getScore = function (events) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: 'riskScore',
      data: events
    }).success(function (scoreData) {
      deferred.resolve(scoreData);
    });

    return deferred.promise;
  };
})
.service('suspectDrugService', function () {
  this.isSuspectDrug = function (eventDrugs, drugNames) {
    var isSuspect = false, i = 0, j = 0, searchDrugName, eventDrugName;

    // determine if one of the two drugs is a suspect drug
    while (!isSuspect && i < drugNames.length) {
      j = 0;
      while (!isSuspect && j < eventDrugs.length) {
        eventDrugName = eventDrugs[j].medicinalproduct.toUpperCase();
        searchDrugName = drugNames[i].toUpperCase();

        if (searchDrugName === eventDrugName && eventDrugs[j].drugcharacterization === "1") {
          isSuspect = true;
        }
        j++;
      }
      i++;
    }

    return isSuspect;
  };
})
.service('riskCalcService', function ($q, eventDataService, Risk, scoreService, suspectDrugService) {
  function buildRiskObjects (events, drugNames) {
    var riskObjects = [];

    angular.forEach(events, function (event) {
      if (suspectDrugService.isSuspectDrug(event.patient.drug, drugNames)) {
        riskObjects.push(new Risk(event.serious, event.seriousnessdeath, 1));
      }
      else {
        riskObjects.push(new Risk(event.serious, event.seriousnessdeath, 0));
      }
    });

    return riskObjects;
  }

  this.getRisk = function (drugNames, genderFieldValue, locationFieldValue, periodFieldValue) {
    var deferred = $q.defer();

    eventDataService.getEvents(drugNames, genderFieldValue, locationFieldValue, periodFieldValue)
      .then(function (events) {
      deferred.resolve(scoreService.getScore(buildRiskObjects(events, drugNames)));
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };
})
.directive('riskReport', function () {
  return {
    restrict: 'EA',
    templateUrl: 'home/drug-search/risk/drugSearch.risk.tpl.html',
    scope: {
      riskScore: '=',
      showProcessing: '='
    }
  };
});