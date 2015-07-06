angular.module('d3Bars', [])
.directive('d3Bars', function ($window) {
  return {
    restrict: 'EA',
    scope: {
      data: '='
    },
    link: function (scope, element, attrs) {
      scope.$watch('data' , buildGraph);

      // Browser onresize event
      $window.onresize = function () {
         scope.$apply();
      };

      function buildGraph () {
          d3.select("svg").remove();

          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');

            // Watch for resize event
            scope.$watch(function () {
              return angular.element($window)[0].innerWidth;
            }, function () {
              scope.render(scope.data);
            });

            scope.render = function (data) {
              // grabbing attributes off directive tag
              var margin = parseInt(attrs.margin, 10) || 20,
                barHeight = parseInt(attrs.barHeight, 10) || 20,
                barPadding = parseInt(attrs.barPadding, 10) || 5;

              var oneSecond = 1000;

              // remove all previous items before render
              svg.selectAll('*').remove();

              // If we don't pass any data, return out of the element
              if (!data) {
                return;
              }

              // setup variables
              var width = d3.select(element[0]).node().offsetWidth - margin,
                // calculate the height
                height = scope.data.length * (barHeight + barPadding),
                // Use the category20() scale function for multicolor support
                color = d3.scale.category20(),
                // our xScale
                xScale = d3.scale.linear().domain([0, d3.max(data, function (d) {
                  return d.count;
                })]).range([1, width]);

              // set the height based on the calculations above
              svg.attr('height', height);

              // preventing invalid rect width errors
              if (width > 0) {
                //create the rectangles for the bar chart
                svg.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .on("click", function (d, i) {
                    return scope.onClick({item: d});
                  })
                  .attr("height", barHeight) // height of each bar
                  .attr("width", 0) // initial width of 0 for transition
                  .attr("x", Math.round(margin / 2)) // half of the 20 side margin specified above
                  .attr("y", function (d, i) {
                    return i * (barHeight + barPadding);
                  }) // height + margin between bars
                  .attr('fill', '#ddd')
                  .transition()
                  .duration(oneSecond) // time of duration
                  .attr("width", function (d) {
                    return xScale(d.count);
                  })
                  .attr('fill', function (d) {
                    return color(d.count);
                  });
              }
                svg.selectAll('text')
                  .data(data)
                  .enter()
                  .append('text')
                  .attr('fill', '#000')
                  .attr('y', function (d, i) {
                    return i * (barHeight + barPadding) + 15;
                  })
                  .attr('x', 25)
                  .text(function (d) {
                    return d.term + ' (' + d.count + ')';
                  });

                  svg.selectAll('text.values')
                    .data(data)
                    .enter()
                    .append('text')
                    .attr('fill', '#000')
                    .attr('y', function (d, i) {
                      return i * (barHeight + barPadding) + 15;
                    })
                    .attr('x', 0)
                    .text(function (d) {
                      return;
                    });
                  };
              }
          }
   };
});