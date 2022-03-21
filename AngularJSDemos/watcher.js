var myApp = angular.module("myModule",[])

myApp.controller("myController", function($scope){
    $scope.a = 10
    $scope.b = 20
    $scope.c = 30
    $scope.d = 40


    $scope.updateC = function(){
        $scope.c = $scope.a * $scope.b
    }

    //manual watcher for c
    $scope.$watch("c", function(newVal, oldVal){
        if(newVal != oldVal)
            console.log("Updated C to "+ newVal)
    })
    $scope.$watch("a", function(newVal, oldVal){
        if(newVal != oldVal)
            $scope.c = $scope.b * 2
    })
    $scope.$watch("b", function(newVal, oldVal){
        if(newVal != oldVal)
            $scope.b = $scope.a * 2
});

})


