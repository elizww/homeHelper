angular.module('hh-categories.controller.CategoriesController', ['hh-categories.service.Category'])
    .controller('CategoriesController', [ '$scope',
        'Category',
        '$log',
        '$modal',
        function($scope,
                 Category,
                 $log,
                 $modal) {
            "use strict";

            var self = this;

            $scope.category = new Category();
            self.categoryId = 0;

            self.refreshList = function() {
                Category.all().then(function(categories){
                    $scope.categories = categories;
                });
            };



            self.modalSuccess = function(category){
                $log.info("save called");
                $log.info(category);

                self.refreshList();
            };



            self.refreshList();

            self.openCategoryModal = function (category) {
                var modalInstance = $modal.open({
                    templateUrl: 'categories/categoryModal.html',
                    windowClass: 'category-modal',
                    resolve: {
                        category: function () {
                            return category;
                        }
                    },
                    controller: function ($scope, $modalInstance, category, Category) {
                        $scope.action = "Edit";
                        if (!angular.isDefined(category)){
                            $scope.category = new Category();
                            $scope.action = "Create";
                        }

                        function handleError() {
                            console.log("failed to save");
                        }

                        function handleSuccess() {
                            $modalInstance.close($scope.category);
                        }

                        $scope.ok = function () {
                            $scope.category.$saveOrUpdate(handleSuccess, handleSuccess, handleError, handleError);
                            $modalInstance.close($scope.category);
                        };

                        $scope.close = function () {
                            $modalInstance.dismiss('cancel');
                        };

                        $scope.hasChanges = function(){
                            //return !angular.equals($scope.project, projectCopy);
                            return true;
                        };
                    }
                });

                modalInstance.result.then(self.modalSuccess);
            };
        }]);



