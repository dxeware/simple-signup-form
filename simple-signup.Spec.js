describe('optIn', function() {

    var scope,
        element,
        compiled,
        html,
        someone;

    beforeEach(module("SimpleSignup"));
    beforeEach(module('optin-template.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        //someone = 'Willis';
        html = "<opt-in></opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render element and contain form and inputs', function(){
        expect(element.find('form').attr('name')).toEqual('myForm');
        expect(element.find('input').attr('placeholder')).toEqual('first name');
        expect(element.find('input').attr('type')).toEqual('text');
        //How to check the other inputs?
    });
});
