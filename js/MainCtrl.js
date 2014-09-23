app.controller('MainCtrl', function ($scope) {
		$scope.roman = '';
		var error = "Enter a Number between 1 and 3999";
		$scope.error = error;
		
		$scope.$watch('number', function(newValue, oldValue) {
		  $scope.generate(newValue);
		});
		
		//Function to generate roman representation and store it in scope
		$scope.generate = function(num) {
			if(num === undefined || num < 1 || num > 3999){
				$scope.error = error;
				return;
			}
			
			$scope.error = "";
			var romanSymbols = ["M","XM","CM","D","XD","CD","C","XC","L","XL","X","IX","V","IV","I"];
			var indianNumbers = [1000, 990, 900, 500, 490, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
			
			var i = 0, romanString= "";
			
			while (num > 0 || indianNumbers.length === (i - 1)) {
				while ((num - indianNumbers[i]) >= 0) {
					num -= indianNumbers[i];
					romanString += romanSymbols[i];
				}
				i++;
			}
			$scope.roman = romanString;
		}
});