'use strict';

// Declare app level module which depends on views, and components
angular.module('hh', [
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'hh-mongolab',
    'hh-categories',
    'hh-router',
    'hh.controller.MainController'
]).config(function($logProvider){
    $logProvider.debugEnabled(true);
});

