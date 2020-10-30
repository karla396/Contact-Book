(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/', {
                    controller: 'contactCtrl',
                    templateUrl: '/app/templates/contact.html'
                })
                .when('/addContact', {
                    controller: 'contactAddCtrl',
                    templateUrl: '/app/templates/contactAdd.html'
                })
                .when('/editContact/:id', {
                    controller: 'contactEditCtrl',
                    templateUrl: '/app/templates/contactEdit.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();