myApp.controller('addCtrl', function ($scope, $http) {

    $scope.create = () => {
        $http.post('http://localhost:3000/api/product/create', {
            name: $scope.name,
            price: $scope.price,
            description: $scope.description
        }).then(function (res) {
            alert('thành công')
            $scope.name = ""
            $scope.price = ""
            $scope.description = ""
        })
    }
});