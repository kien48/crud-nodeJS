myApp.controller('updateCtrl', function($scope, $http, $routeParams) {
    $scope.sanPham = {
        name  : "",
        price : "",
        description : ""
    }

    $http.get("http://localhost:3000/api/product/"+ $routeParams.id)
    .then(function(res){
        $scope.sanPham = res.data.data
        console.log($scope.sanPham)
    })


    $scope.update = ()=>{
        $http.put('http://localhost:3000/api/product/update/'+ $routeParams.id,{
            name  : $scope.sanPham.name,
            price : $scope.sanPham.price,
            description : $scope.sanPham.description
        }).then(function(res){
            alert('thành công')
        })
    }
})