(function() {
    'use strict';

    angular
        .module('app.limalinks.admin-ui')
        .controller('DeleteTownDialogController', DeleteTownDialogController);

    /* @ngInject */
    function DeleteTownDialogController($state, $mdDialog, selected) {
        var vm = this;
        vm.selected = selected;
        console.log(vm.selected);
        vm.cancel = cancel;
        vm.hide = hide;
        vm.town = {
            name: ''
        };

        /////////////////////////

        function hide() {
            $mdDialog.hide(true);
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})();
