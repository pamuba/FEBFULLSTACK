function AppCtrl($scope, $http){
    console.log("Controller")

    $http.get("/contactlist").success(function(response){
        $scope.contactlist = response
    })

    // $scope.contactlist = contactlist
}