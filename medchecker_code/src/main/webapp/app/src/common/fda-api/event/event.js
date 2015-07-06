angular.module('fdaApi.event', [
  'ngResource',
  'fdaApi.apiKey',
  'fdaApi.event.drugField',
  'fdaApi.event.dateField',
  'fdaApi.event.genderField',
  'fdaApi.event.locationField'
])
.factory('Event', function ($resource) {
  return $resource('https://api.fda.gov/drug/event.json?');
})
.service('eventCountService', function () {
  this.getCount = function (reactions) {
    var totalCount = 0;
    angular.forEach(reactions, function (reaction) {
      totalCount += reaction.count;
    });
    return totalCount;
  };
})
.service('eventPercentageService', function (eventCountService) {
  this.calculatePercentages = function (reactions) {
    var totalCount = eventCountService.getCount(reactions);

    angular.forEach(reactions, function (reaction) {
      reaction.percentage = (reaction.count / totalCount) * 100;
    });

    return reactions;
  };
})
.service('searchParamService', function () {
  this.buildSearchParam = function (drugNames, gender, period, country) {
    var searchParamString = drugNames;

    // optionally setting gender as a parameter
    if (gender) {
      searchParamString += ' AND ' + gender;
    }

    // optionally setting country as a parameter
    if (country) {
      searchParamString += ' AND ' + country;
    }

    return searchParamString + ' AND ' + period;
  };
})
.service('eventDataService', function ($q, Event, eventPercentageService,
                                       apiKeyService, searchParamService, drugFieldService) {
  var apiKey = null;
  var MAX_EVENTS = 100;

  // grab the api key on loading the service
  apiKeyService.getKey().then(function (keyValue) {
    apiKey = keyValue;
  });

  this.getEvents = function (drugNames, genderField, locationField, periodField) {
    var deferred = $q.defer();
    var drugField = drugFieldService.buildField(drugNames);
    var searchParam = searchParamService.buildSearchParam(drugField.value, genderField,
      locationField, periodField);

    Event.get({
      search: searchParam,
      api_key: apiKey,
      limit: MAX_EVENTS
    }, function (responseData) {
      // resolve data after we have appended percentages to the result set
      deferred.resolve(eventPercentageService.calculatePercentages(responseData.results));
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };

  this.getEventsCount = function (drugNames, genderField, locationField, periodField) {
    var deferred = $q.defer();
    var drugField = drugFieldService.buildField(drugNames);
    var searchParam = searchParamService.buildSearchParam(drugField.value, genderField,
    locationField, periodField);

    Event.get({
      search: searchParam,
      count: 'patient.reaction.reactionmeddrapt.exact',
      api_key: apiKey,
      limit: MAX_EVENTS
    }, function (responseData) {
      // resolve data after we have appended percentages to the result set
      deferred.resolve(eventPercentageService.calculatePercentages(responseData.results));
    }, function (error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };
});