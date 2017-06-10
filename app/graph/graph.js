/**
 * Created by Yasiru on 6/10/2017.
 */
'use strict';

angular.module('myApp.graph', [
    'ngRoute',
    'nvd3'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/graph', {
            templateUrl: 'graph/graph.html',
            controller: 'GraphCtrl'
        });
    }])

    .controller('GraphCtrl', ['$scope', function($scope, medicaldataService) {
        var color = d3.scale.category20()
        // debugger;
        $scope.options = {
            chart: {
                type: 'forceDirectedGraph',
                height: 600,
                width: (function(){ return nv.utils.windowSize().width })(),
                margin:{top: 20, right: 20, bottom: 20, left: 20},
                color: function(d){
                    return color(d.group)
                },
                nodeExtras: function(node) {
                    node && node
                        .append("text")
                        .attr("dx", 8)
                        .attr("dy", ".35em")
                        .text(function(d) { return d.name })
                        .style('font-size', '25px');
                },
                title: {
                    enable: true,
                    text: 'Medication Conflicts'
                },
            }
        };

        $scope.data = {
            "nodes":[
                {"name":"Mme.Pontmercy","group":1},
                {"name":"Mlle.Vaubois","group":1},
                {"name":"Lt.Gillenormand","group":1},
                {"name":"Marius","group":2},
                {"name":"BaronessT","group":2},
                {"name":"Mabeuf","group":2},
                {"name":"Enjolras","group":2},
                {"name":"Combeferre","group":3},
                {"name":"Prouvaire","group":3},
                {"name":"Feuilly","group":3},
                {"name":"Courfeyrac","group":3},
                {"name":"Bahorel","group":3},
                {"name":"Bossuet","group":3},
                {"name":"Joly","group":3},
                {"name":"Grantaire","group":3},
            ],
            "links":[
                {"source":1,"target":2,"value":3},
                {"source":1,"target":14,"value":1},
                {"source":3,"target":4,"value":1},
                {"source":3,"target":7,"value":1},
                {"source":2,"target":8,"value":1},
                {"source":4,"target":1,"value":1},
                {"source":5,"target":10,"value":1},
                {"source":6,"target":13,"value":1},
                {"source":7,"target":14,"value":1},
                {"source":8,"target":11,"value":1},
                {"source":8,"target":12,"value":1},
                {"source":9,"target":6,"value":1},
                {"source":10,"target":8,"value":1},
                {"source":11,"target":0,"value":1},
                {"source":7,"target":13,"value":1}
            ]
        }

        // $scope.api.update();
    }]);