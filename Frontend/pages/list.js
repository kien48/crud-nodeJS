myApp.controller('listCtrl', function($scope, $http) {
    $scope.danhSachSanPham = [];

    $scope.get = ()=>{
        $http.get("http://localhost:3000/api/product")
    .then(function(res){
        $scope.danhSachSanPham = res.data.data
        console.log(res.data)
    })
    }
    $scope.get()

    $scope.delete = (id)=>{
        $http.delete('http://localhost:3000/api/product/remove/'+id)
        .then(function(){
            alert('xóa thành công')
            $scope.get()
        })
    }

});