(function () {
    'use strict';

    angular
        .module('app')
        .controller('contactCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.contacts = [];

            getData();

            function getData() {
                dataService.getContacts().then(function (result) {
                    $scope.contacts = result;
                });
            }

            $scope.deleteContact = function (id) {
                dataService.deleteContact(id).then(function () {
                    toastr.success('Contact delete successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting contact width Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('contactAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createContact = function (contact) {
                dataService.addContact(contact).then(function () {
                    toastr.success('Contact created sucessfull');
                    $location.path('/');
                }, function () {
                        toastr.error('Error in created contact');
                });
            };
        }])
        .controller('contactEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.contact = {};
            $scope.states = {
                showUpdateButton: false
            };

            dataService.getContactsById($routeParams.id).then(function (result) {
                $scope.contact = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                    toastr.error('Error in fetching contact with Id:' + $routeParams.id);
            });

            $scope.updateContact = function (contact) {
                dataService.editContact(contact).then(function () {
                    toastr.success('Contact updated succesfully');
                    $location.path('/');
                }, function () {
                        toastr.error('Error in updating contact ');

                });
            };
        }]);

})();
