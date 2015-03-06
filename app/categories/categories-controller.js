angular.module('hh-categories.controller.CategoriesController', ['hh-categories.service.Category'])
    .controller('CategoriesController', [ '$scope',
        'Category',
        '$log',
        function($scope,
                 Category,
                 $log) {
            "use strict";

            $scope.category = new Category();

            function refreshList() {
                Category.all().then(function(categories){
                    $scope.categories = categories;
                });
            }

            function handleError() {
                console.log("failed to save");
            }

            function handleSuccess() {
                refreshList();
            }

            $scope.save = function(){
                $log.info("save called");
                $log.info($scope.category);

                $scope.category.$saveOrUpdate(handleSuccess, handleSuccess, handleError, handleError);
            };

            $scope.hasChanges = function(){
                //return !angular.equals($scope.project, projectCopy);
                return true;
            };

            refreshList();
            //$scope.categories = ['category 1', 'category 2', 'category 3'];
        }]);



