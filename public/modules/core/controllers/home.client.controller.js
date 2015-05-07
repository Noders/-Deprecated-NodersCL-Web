'use strict';


angular.module('core').controller('HomeController', ['$scope', '$timeout', 'Authentication', 'Subcsription', '$http',
    function($scope, $timeout, Authentication, Subscription, $http) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.subscription = {}
        Subscription.count().$promise.then(function(count) {
            $scope.inscritos = count.count + 31;
        });
        $scope.inscritos = 30;

        var reqBackend = {
            method: 'GET',
            url: 'https://api.welcu.com/v1/event.json',
            headers: {
                'Authorization': "event clEiuiZQ770ZYfCp-M67ES_snO_7Ee40Egfh79rS"
            }
        }

        var reqIntro = {
            method: 'GET',
            url: 'https://api.welcu.com/v1/event.json',
            headers: {
                'Authorization': "event HPTn3igbIVMyWtxNqSup5yw8B4sLcCSY6hnRcZCi  "
            }
        }

        $http(reqIntro)
            .success(function(data, status, header, config) {
                $scope.inscritos += data.tickets.length
                $http(reqBackend)
                    .success(function(data2, status, header, config) {
                        $scope.inscritos += data2.tickets.length
                    })
            })

        $scope.map = {
            center: {
                latitude: -33.4422182,
                longitude: -70.6262061
            },
            zoom: 18,
            options: {
                scrollwheel: false
            },
            control: {}
        };

        $scope.marker = {
            id: 0,
            coords: {
                latitude: -33.4422182,
                longitude: -70.6262061
            },
            options: {
                draggable: false
            }
        };


        $scope.subscribeMe = function(event) {
            var email = $(event.target).parents(".addyourmail").find("#email").val()
            var tipo = $(event.target).parents(".addyourmail").find("#courses").val()
            var el = $(event.target).parents(".addyourmail").find("input").val()
            var elparent = $(event.target).parents(".inscription")
            $scope.subscription.email = email;
            $scope.subscription.tipo = tipo;
            Subscription.create({
                    email: $scope.subscription.email,
                    tipo: $scope.subscription.tipo
                }).$promise
                .then(function() {
                    elparent.find('.addyourmail').addClass('fadeOutLeft')
                    var timer3 = $timeout(function() {
                        elparent.addClass("during").addClass("animation-done")
                        elparent.find(".response").addClass("fadeInRight")
                    }, 190)
                });
            //;
        }

        $scope.addFadeInLeftBig = function(index, inview, inviewpart, event) {
            console.log("test")
        };

        $scope.addFadeInRigtBig = function(index, inview, inviewpart, event) {
            var inViewReport = inview ? '<strong>enters</strong>' : '<strong>exit</strong>';
            if (typeof(inviewpart) != 'undefined') {
                inViewReport = '<strong>' + inviewpart + '</strong> part ' + inViewReport;
            }
            $scope.inviewLogs.unshift({
                id: logId++,
                message: $sce.trustAsHtml('Line <em>#' + index + '</em>: ' + inViewReport)
            });
            console.log(event);
            return false;
        };

    }
]);
