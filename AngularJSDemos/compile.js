var app = angular.module("app",[])

app.controller("msg", ['$scope',function($scope){
   
}]);

app.directive('message', function(){
    return {
        compile: function(tElement, tAttributes){
            console.log(tAttributes.text+ "In Compile phase")
 
            return {
                pre: function(scope, ielement, iattributes){
                 console.log(iattributes.text+ "In Pre phase")
                },
                post: function(scope, ielement, iattributes){
                 console.log(iattributes.text+ "In Post phase")
                }
            }
        },
        controller: function($scope, $element, $attributes){
         console.log($attributes.text+ "In Controller phase")
     }
    }
})


