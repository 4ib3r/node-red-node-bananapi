angular.module('app', [
    'bd.sockjs'
]).factory('battSocket', function (socketFactory) {
    console.log("factory");
    return socketFactory({
        url: '/api/ws/battery'
    });
}).controller('AppCtrl', ['$scope', 'battSocket', function ($scope, battSocket) {
    console.log(battSocket);
    battSocket.setHandler('open', function() {
        $scope.data = "open";
    });
    battSocket.setHandler('message', function(msg) {
        $scope.data = "message: " + JSON.stringify(msg);
    });
}]);