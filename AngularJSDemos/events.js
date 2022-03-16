var myApp = angular.module("myModule",[])

myApp.controller("myController", function($scope){
    var technologies = [
        {name:"React", likes:0, dislikes:0},
        {name:"Angular", likes:0, dislikes:0},
        {name:"VueJS", likes:0, dislikes:0},
        {name:"GraphQL", likes:0, dislikes:0},
        {name:"MongoDB", likes:0, dislikes:0}
    ]
    $scope.technologies = technologies

    $scope.incrementLikes = function(technology){
        technology.likes++
    }
    $scope.incrementDislikes = function(technology){
        technology.dislikes++
    }

});


