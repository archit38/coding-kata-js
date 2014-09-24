describe('MainCtrl', function(){
  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller(MainCtrl, { $scope: scope });
  }));

  it('should change Roman Numeral according to entered number < 1000', function() {
    scope.number = 456;
    scope.$digest();
    expect(scope.roman).toBe("CDLVI");
  });
  
  it('should change Roman Numeral according to entered number > 1000', function() {
    scope.number = 1298;
    scope.$digest();
    expect(scope.roman).toBe("MCCXCVIII");
  });
  
  it('should change Roman Numeral according to entered number > 2000', function() {
    scope.number = 2001;
    scope.$digest();
    expect(scope.roman).toBe("MMI");
  });
  
   it('should change Roman Numeral according to entered number > 3000', function() {
    scope.number = 3999;
    scope.$digest();
    expect(scope.roman).toBe("MMMXMIX");
  });
 it('should change show warning if entered number > 3999', function() {
    scope.number = 4000;
    scope.$digest();
    expect(scope.error.length).not.toBe(0);
  });
});