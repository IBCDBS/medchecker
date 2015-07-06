angular.module('fdaApi.apiKey', [])
.service('apiKeyService', function ($http, $q) {
  this.getKey = function () {
    var deferred = $q.defer();

    // using http rather than resource because its easier to specify
    // that we don't want the plain text response to be transformed
    $http.get('apiKey', {
      transformResponse: undefined  // dont try to parse the key as json
    }).success(function (data) {
      deferred.resolve(data);
    }).error(function (data, status) {
      throw new Error('Unable to retrieve api key.  Error code was: ' + status);
    });

    return deferred.promise;
  };
});
