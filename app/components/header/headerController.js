angular.module('hh.controller.HeaderController', ['ui.bootstrap'])
    .controller('HeaderController', [function () {
        "use strict";

        var header = this;

        header.reports = {
            isOpen: false
        };

    }]);
