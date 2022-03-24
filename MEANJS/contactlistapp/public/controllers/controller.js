function AppCtrl($scope, $http){
    console.log("Controller")

    var refresh = function(){
        $http.get("/contactlist").success(function(response){
            $scope.contactlist = response
            $scope.contact = ""
        })
    }
    refresh()
   

    $scope.addContact = function(){
        console.log($scope.contact)
        //send the $scope.contact to server.js
        $http.post("/contactlist", $scope.contact).success(function(response){
            console.log(response)
            refresh();
        })
    }

    // $scope.contactlist = contactlist
}