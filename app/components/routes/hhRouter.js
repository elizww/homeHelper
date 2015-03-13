angular.module('hh-router', [
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('hh', {
        url: '/hh',
        templateUrl: 'components/main/hhMain.html',
        controller: 'MainController as main',
        views: {
            "@": {
                url: '/hh',
                templateUrl: 'components/main/hhMain.html',
                controller: 'MainController as main'
            },
             "header@hh": {
                 url: '/header',
                 templateUrl: 'components/header/hhHeader.html',
                 controller: 'HeaderController as header'
             }

            /*,
            "notifications@aff": {
                url: '/notifications',
                templateUrl: 'app/common/notifications/partial/notifications.html',
                controller: 'NotificationsCtrl as notificationsCtrl'
            }*/
        }
    });


    // full state example
/*    $stateProvider.state('aff.create-change-request', {
        url: '/changeRequests/fromTemplate/:id',
        templateUrl: 'app/changeRequest/edit/editChangeRequest.html',
        controller: 'EditChangeRequestCtrl as editChangeRequestCtrl',
        resolve: {
            action: function() {
                return "fromTemplate";
            }
        }
    });*/

    // modal example
 /*   $stateProvider.state('change-request-read-only', {
        url: '/affModal/changeRequests/readOnly/:id',
        templateUrl: 'app/changeRequest/readOnlyView/readOnlyView.html',
        controller: 'ReadOnlyViewCtrl as readOnlyView'
    });
*/
    /* Add New States Above */
    $urlRouterProvider.otherwise('/hh');

});

angular.module('hh-router').run(function($rootScope, $log) {
    'use strict';

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error) {
            $log.warn('stateChangeError:');
            $log.warn(error);
        }
    });
});

