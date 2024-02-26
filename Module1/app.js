angular.module('BookCheck', [])
.controller('BookCheckController', ['$scope', function($scope) {
    $scope.books = '';
    $scope.message = '';
    $scope.empty = false;
    $scope.checked = false;

    $scope.checkBooks = function() {
        $scope.checked = true;
        if ($scope.books.length === 0) {
            $scope.empty = true;
        } else {
            $scope.empty = false;
            var bookArray = $scope.books.split(',');
            if (bookArray.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }
    };
}]);