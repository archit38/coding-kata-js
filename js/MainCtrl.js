app.controller('MainCtrl', function ($scope) {
		$scope.roman = '';
		var error = "Enter a Number between 1 and 3999";
		$scope.error = error;
		$scope.$watch('number', function(newValue, oldValue) {
		  $scope.generate(newValue);
		});
		$scope.generate = function(num) {
			if(num == undefined || num < 1 || num > 3999){
				$scope.error = error;
				return;
			}
			$scope.error = "";
			var roman = ["M","XM","CM","D","XD","CD","C","XC","L","XL","X","IX","V","IV","I"];
			var english = [1000, 990, 900, 500, 490, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
			var i = 0, romanString= "";
			var temp = num;
			while (temp > 0 || english.length === (i - 1)) {
				while ((temp - english[i]) >= 0) {
					temp -= english[i];
					romanString += roman[i];
				}
				i++;
			}
			$scope.roman = romanString;
		}
});