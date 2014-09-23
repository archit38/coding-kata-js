app.factory('JsonService', function($http, $q) {
	function useHttp(url) {
		var deferred = $q.defer();
        $http.get(url)
            .success(function(data) {
                deferred.resolve(data);
            });
		return deferred.promise;;
    };
  return {
        rest:useHttp
   }});
