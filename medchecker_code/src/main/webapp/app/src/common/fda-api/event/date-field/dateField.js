angular.module('fdaApi.event.dateField', [])
.service('dateFormatter', function () {
  function insertZero(dateSection) {
    return dateSection.length > 1 ? dateSection : '0' + dateSection;
  }

  this.formatDay = function (day) {
    return insertZero(day);
  };

  this.formatMonth = function (month) {
    // javascript dates offset month by -1, add 1 and convert to string
    month += 1;
    month = month.toString();
    return insertZero(month);
  };

  this.format = function (date) {
    var year = date.getFullYear().toString();
    var month = this.formatMonth(date.getMonth());
    var day = this.formatDay(date.getDate().toString());
    return year + month + day;
  };
})
.factory('DateField', function (dateFormatter) {
  function DateField (minDate, maxDate, timeframe) {
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.timeframe = timeframe;
    this.value = 'receivedate:[' + dateFormatter.format(minDate) +
      ' TO ' + dateFormatter.format(maxDate) + ']';
  }

  return DateField;
})
.service('dateFieldService', function (dateFormatter, DateField) {
  this.build = function (minDate, maxDate, timeframe) {
    return new DateField(minDate, maxDate, timeframe);
  };
});