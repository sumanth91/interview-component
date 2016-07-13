
// Start your app here.
$(document).ready(function(){

$("#groupSchedule").modal("show");

})


var groupSchedule = angular.module("groupScheduleApp",[]);
groupSchedule.controller("groupScheduleCtrl",function($scope,$http){
	$scope.name = "";
	$scope.usersList = [];
	$scope.selectedIndex = 0;
	$http.get("data/user-schedules/1.json").then(function(response){
		$scope.usersList.push(response.data);
		$scope.name = $scope.usersList[0].user.name;
});


$http.get("data/user-schedules/2.json").then(function(response){
	$scope.usersList.push(response.data);
});

$http.get("data/user-schedules/3.json").then(function(response){
	$scope.usersList.push(response.data);
});

$http.get("data/user-schedules/4.json").then(function(response){
	$scope.usersList.push(response.data);
	$scope.previousElement = $scope.usersList[0];
	$scope.daysArray = $scope.usersList[0].days;

	// var showName = true;
	// if($scope.usersList.length > 2) {
	// 	showName = false;
	// } else {
	// 	showName = true;
	// }
});



$scope.changeSelectedIndex = function(index,element){

	var date = $scope.usersList[0].days[0].departAmTime;

	for(var i = 0; i < $scope.usersList[0].days.length -1; i++){

		var deptAmlngt = 0;
		var deptPmlnt =0;

		for (var j = 0 ;j <  $scope.usersList.length -1;j++) {


			if(($scope.usersList[j].days[i].departAmTime == $scope.usersList[j+1].days[i].departAmTime )&& $scope.usersList[j].days[i].isCommuting )
			{
				deptAmlngt ++;
			}

			if(($scope.usersList[j].days[i].departPmTime == $scope.usersList[j+1].days[i].departPmTime)&& $scope.usersList[j].days[i].isCommuting  )
			{
				deptPmlnt ++;
			}
			
		}
		if(deptAmlngt == $scope.usersList.length -1) {
			for (var j = 0; j < $scope.usersList.length ; j++) {
				$scope.usersList[j].days[i].amColor = "blueColor";
				$scope.usersList[j].days[i].isAmMatched = "true";
			}
		}
		else {
			$scope.usersList[j].days[i].amColor = "greyColor";
			$scope.usersList[j].days[i].isAmMatched = "false";
		}

		if(deptPmlnt == $scope.usersList.length -1) {
			for (var j = 0; j < $scope.usersList.length ; j++) {
				$scope.usersList[j].days[i].pmColor = "blueColor";
				$scope.usersList[j].days[i].isPmMatched = "true";
			}
		}
		else {
			$scope.usersList[j].days[i].pmColor = "greyColor";
			$scope.usersList[j].days[i].isPmMatched = "false";
		}
		}


	$scope.daysArray = $scope.usersList[index].days;
	$scope.name = $scope.usersList[index].user.name;
	$scope.selectedIndex = index;
	$("li.circlediv").attr("style", "");
	element.target.style.borderBottom = "2px solid #0269c2";
	$scope.previousElement = $scope.usersList[index];
}
});
angular.bootstrap(document,["groupScheduleApp"]);