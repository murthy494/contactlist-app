var app= angular.module("myApp",[]);

app.controller("myController",["$scope","$http",function($scope,$http){

		
		$http.get("/contactlist").success(function(response){
			$scope.contact= response;
			
		});
		
		

		var refresh=function(){
		$scope.addContact= function(){
			$http.post("/contactlist",$scope.contact).success(function(response){
				console.log("hiiiii"+response);
				$scope.contact= response;
				$scope.contact="";
				refresh();
			})
		}}


		$scope.editContact= function(id){
		$http.get("/contactlist/"+ id).success(function(response){
			$scope.contact= response;
			})
		}


		$scope.updateContact= function(){
		$http.put("/contactlist/"+ $scope.contact._id,$scope.contact).success(function(response){
			refresh();
			})
		}
}]);