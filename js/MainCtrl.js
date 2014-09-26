app.controller('MainCtrl', function ($scope) {
		$scope.roman = '';
		var error = "Enter a Number between 1 and 3999";
		$scope.error = error;
		
		$scope.$watch('number', function(newValue, oldValue) {
		  $scope.generate(newValue);
		});
		
		//Function to generate roman representation and store it in scope
		$scope.generate = function(num) {
		    //Show the warning if number is out of range
			if(num === undefined || num < 1 || num > 3999){
				$scope.error = error;
				return;
			}
			
			$scope.error = "";
			//Floor the value as roman numerals don't deal with decimals.
			var n= Math.floor(num), val, roman= '' ,i = 0;
			var indianNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
			var romanSymbols= ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
			
			while(i < 13){
			    //Start checking from the highest number in the numerals list.
				val = indianNumerals[i];
				while(n >= val){
				   //Take out the value from the number we are converting to carry on n the loop.
					n -= val;
					//Get the corresponding symbol for the number and append it to result.
					roman += romanSymbols[i];
				}
				if(n === 0) $scope.roman = roman;
				++i;
			}
			$scope.roman = roman;
		}
});