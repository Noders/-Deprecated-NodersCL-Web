'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$anchorScroll', '$location', 'Authentication', 'Menus',
    function($scope, $anchorScroll, $location, Authentication, Menus) {
        $scope.authentication = Authentication;
        $scope.isCollapsed = false;
        $scope.menu = Menus.getMenu('topbar');

        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
        $scope.sticky = 'sticky';
        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.isCollapsed = false;
        });
    }
]);
