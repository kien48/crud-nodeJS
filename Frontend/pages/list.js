myApp.controller('listCtrl', function($scope, $http) {
    $scope.danhSachSanPham = [];

    $http.get("http://localhost:3000/api/product")
    .then(function(res){
        $scope.danhSachSanPham = res.data.data
        console.log(res.data)
    })

});