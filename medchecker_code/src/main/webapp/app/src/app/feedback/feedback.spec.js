describe('Module: feedback', function () {
  beforeEach(module('medchecker.feedback'));

  describe('Controller: FeedbackCtrl', function () {
    var scope, modal, feedbackDataService, deferred;

    beforeEach(inject(function ($injector, $controller, $rootScope) {
      scope = $rootScope.$new();
      modal = $injector.get('$modal');
      feedbackDataService = $injector.get('feedbackDataService');

      var q = $injector.get('$q');
      deferred = q.defer();

      $controller('FeedbackCtrl', {
        $scope: scope,
        $modal: modal,
        feedBackDataService: feedbackDataService
      });
    }));

    describe('onCancelClick', function () {
      it('sets feedback on scope to empty string', function () {
        scope.feedback = 'Feedback previous to cancel click';
        scope.$digest();

        scope.onCancelClick();

        expect(scope.feedback).toEqual('');
      });
    });

    describe('onSubmitClick', function () {
      var expectedFeedback = 'This is some dummy feedback';

      beforeEach(function () {
        spyOn(feedbackDataService, 'postFeedback').andReturn(deferred.promise);
        spyOn(modal, 'open');

        scope.feedback = expectedFeedback;
        scope.$digest();
      });

      it('makes call to feedbackDataService\'s postFeedback method', function () {
        scope.onSubmitClick();
        expect(feedbackDataService.postFeedback).toHaveBeenCalledWith(expectedFeedback);
      });

      it('sets showProcessing on scope to true', function () {
        scope.onSubmitClick();
        scope.$digest();

        expect(scope.showProcessing).toBe(true);
      });

      it('sets showProcessing on scope to false on deferred reolution', function () {
        scope.onSubmitClick();
        deferred.resolve();

        scope.$digest();

        expect(scope.showProcessing).toBe(false);
      });

      it('shows modal on success', function () {
        scope.onSubmitClick();
        deferred.resolve();

        scope.$digest();

        expect(modal.open).toHaveBeenCalled();
      });
    });
  });

  describe('Service: feedbackDataService', function () {
    var feedbackDataService, httpBackend, deferred, q;

    beforeEach(inject(function ($injector) {
      feedbackDataService = $injector.get('feedbackDataService');
      httpBackend = $injector.get('$httpBackend');

      q = $injector.get('$q');
      deferred = q.defer();
    }));

    describe('postFeedback', function () {
      var dummyFeedback = 'Blah blah blah';

      beforeEach(function () {
        httpBackend.when('POST').respond(200);
        spyOn(q, 'defer').andReturn(deferred);
        spyOn(deferred, 'resolve');
      });

      it('calls resolve on success', function () {
        feedbackDataService.postFeedback(dummyFeedback);
        httpBackend.flush();
        expect(deferred.resolve).toHaveBeenCalled();
      });

      it('expects a post call to the feedback controller', function () {
        httpBackend.expectPOST('feedback');
        feedbackDataService.postFeedback(dummyFeedback);
        httpBackend.flush();
      });

      it('returns a promise', function () {
        var returnedValue = feedbackDataService.postFeedback(dummyFeedback);
        httpBackend.flush();
        expect(returnedValue).toEqual(deferred.promise);
      });

      afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
      });
    });
  });
});