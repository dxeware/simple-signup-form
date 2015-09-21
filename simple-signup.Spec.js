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
        var inputEle;

        // Validate form name
        expect(element.find('form').attr('name')).toEqual('myForm');

        // Validate first name input
        inputEle = element.find('input').eq(0);
        expect(inputEle.attr('placeholder')).toEqual('first name');
        expect(inputEle.attr('type')).toEqual('text');
        expect(inputEle.attr('required')).toBeTruthy();

        // Validate last name input
        inputEle = element.find('input').eq(1);
        expect(inputEle.attr('placeholder')).toEqual('last name');
        expect(inputEle.attr('type')).toEqual('text');
        expect(inputEle.attr('required')).toBeTruthy();

        // Validate email input
        inputEle = element.find('input').eq(2);
        expect(inputEle.attr('placeholder')).toEqual('email');
        expect(inputEle.attr('type')).toEqual('text');
        expect(inputEle.attr('size')).toEqual('48');
        expect(inputEle.attr('required')).toBeTruthy();

        // Validate submit input
        inputEle = element.find('input').eq(3);
        expect(inputEle.attr('value')).toEqual('Give us ur info!');
        expect(inputEle.attr('type')).toEqual('submit');
        expect(inputEle.attr('size')).toEqual('48');
    });
});
