jsaApp.controller('getFilesController', ['$scope', '$http', function($scope, $http){
    $scope.doGetFiles = function(){
       var url = "/api/getallfiles";
       $http.get(url).then(function (response) {
			$scope.lstFiles = response.data;
		}, function (response) {
			alert(response.data);
		});
    };
}]);
