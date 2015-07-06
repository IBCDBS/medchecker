angular.module('medchecker.feedback', [
  'ui.router',
  'ui.bootstrap'
])
.config(function config($stateProvider) {
  $stateProvider.state('feedback', {
    url: '/feedback',
    views: {
      "main": {
        controller: 'FeedbackCtrl',
        templateUrl: 'feedback/feedback.tpl.html'
      }
    },
    data: {pageTitle: 'Feedback'}
  });
})
.service('feedbackDataService', function ($http, $q) {
  this.postFeedback = function (feedback) {
    var deferred = $q.defer();

    $http.post('feedback', feedback)
      .success(function(data) {
        deferred.resolve(data);
      });

    return deferred.promise;
  };

})
.controller('FeedbackCtrl', function FeedbackCtrl($scope, $modal, feedbackDataService) {

  $scope.showProcessing = false;

  $scope.onCancelClick = function () {
    $scope.feedback = '';
  };

  $scope.onSubmitClick = function () {
    $scope.showProcessing = true;

    feedbackDataService.postFeedback($scope.feedback).then(function () {
      $scope.showProcessing = false;

      $modal.open({
        templateUrl: 'feedback/confirmation-modal/feedback.confirmationModal.tpl.html',
        controller: 'ModalCtrl'
      });

      $scope.feedback = '';
    });
  };

})
;
