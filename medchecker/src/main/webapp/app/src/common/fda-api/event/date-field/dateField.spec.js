describe('Service: dateFormatter', function () {
  var dateFormatter;

  beforeEach(module('fdaApi.event.dateField'));
  beforeEach(inject(function ($injector) {
    dateFormatter = $injector.get('dateFormatter');

  }));

  describe('format', function () {
    it('returns formatted date string', function () {
      var year = 2015;
      var july = 8;
      var fourth = 4;
      var fourthOfJuly = new Date(year, july, fourth);
      var expectedResult = '20150704';
      spyOn(dateFormatter, 'formatMonth').andReturn('07');
      spyOn(dateFormatter, 'formatDay').andReturn('04');

      expect(dateFormatter.format(fourthOfJuly)).toEqual(expectedResult);
    });
  });
});