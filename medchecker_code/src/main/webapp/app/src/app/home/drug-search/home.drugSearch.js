angular.module('medchecker.home.drugSearch', [
  'd3Bars',
  'fdaApi.event',
  'fdaApi.apiKey',
  'smart-table',
  'ui.bootstrap',
  'drugSearch.modal',
  'medchecker.home.drugSearch.risk'
])
.service('drugSearchListService', function ($modal) {
  var MAX_ITEM_COUNT = 3;

  this.addToSearchList = function (listItem, searchList) {
    if (listItem && listItem.length) {
      if (searchList.length >= MAX_ITEM_COUNT) {
        $modal.open({
          templateUrl: 'home/drug-search/max-additional-drugs-modal/drugSearch.maxAdditionalDrugsModal.tpl.html',
          controller: 'ModalCtrl'
        });
      }
      else {
        searchList.unshift(listItem);
        listItem = '';
      }
    }
  };

  this.removeFromSearchList = function (itemIndex, searchList) {
    searchList.splice(itemIndex, 1);
  };
})
.controller('DrugSearchCtrl', function ($scope, $modal, dateFieldService,
  genderFieldService, locationFieldService, drugFieldService, drugSearchListService,
  eventDataService, riskCalcService) {

  var MAX_DISPLAYED = 10;

  function init () {
    var today = new Date();
    var oneYearAgo = new Date();
    var fiveYearsAgo = new Date();
    var tenYearsAgo = new Date();

    oneYearAgo.setYear(today.getFullYear() - 1);
    fiveYearsAgo.setYear(today.getFullYear() - 5);
    tenYearsAgo.setYear(today.getFullYear() - 10);

    $scope.oneYearAgo = dateFieldService.build(oneYearAgo, today, '1 Year');
    $scope.fiveYearsAgo = dateFieldService.build(fiveYearsAgo, today, '5 Years');
    $scope.tenYearsAgo = dateFieldService.build(tenYearsAgo, today, '10 Years');
    $scope.period = $scope.tenYearsAgo;

    $scope.additionalDrugNames = [];

    $scope.male = genderFieldService.buildMale();
    $scope.female = genderFieldService.buildFemale();
    $scope.all = genderFieldService.buildBoth();
    $scope.gender = $scope.all;

    $scope.worldwide = locationFieldService.buildWorldwide();
    $scope.unitedStates = locationFieldService.buildUnitedStates();
    $scope.location = $scope.unitedStates;

    $scope.events = [];
  }

  function updateResultsHeaders (drugFieldStr) {
    // building message string seen above the results tabs
    $scope.drugsString = drugFieldStr;
    $scope.locationString = $scope.location.strName;
    $scope.genderString = $scope.gender.sex;
    $scope.periodString = $scope.period.timeframe;
  }

  $scope.onSearchClick = function () {
    var drugNames = [];

    // don't do anything search related if there isn't any text
    if ($scope.drugName) {
      $scope.showProcessing = true;

      drugNames.push($scope.drugName);
      drugNames = drugNames.concat($scope.additionalDrugNames);

      eventDataService.getEventsCount(drugNames, $scope.gender.value,
      $scope.period.value, $scope.location.value).then(function (results) {
        $scope.events = results;
        $scope.chartData = results.slice(0, MAX_DISPLAYED);
        var drugField = drugFieldService.buildField(drugNames);
        updateResultsHeaders(drugField.strName);
      }, function () {
        $modal.open({
          templateUrl: 'home/drug-search/no-results-modal/drugSearch.noResultsModal.tpl.html',
          controller: 'ModalCtrl'
        });
      });

      riskCalcService.getRisk(drugNames, $scope.gender.value,
      $scope.period.value, $scope.location.value).then(function (riskScore) {
        $scope.riskScore = riskScore;
        $scope.showProcessing = false;
      }, function () {
        $scope.showProcessing = false;
      });
    }
  };

  $scope.onTabChange = function () {
    $scope.chartData = $scope.events.slice(0, MAX_DISPLAYED);
  };

  $scope.onAddDrugClick = function() {
    drugSearchListService.addToSearchList($scope.drugName, $scope.additionalDrugNames);
    $scope.drugName = '';
  };

  $scope.onRemoveDrugClick = function (index) {
    drugSearchListService.removeFromSearchList(index, $scope.additionalDrugNames);
  };

  init();
});