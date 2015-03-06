angular.module('hh-categories.service.Category', [])
    .service('Category', ['$mongolabResourceHttp',function ($mongolabResourceHttp) {
        return $mongolabResourceHttp('categories');
    }]);