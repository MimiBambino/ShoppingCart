// Ensure the DOM is ready for tests
$(function() {
// Test the initial state of the shoppingCart properties
    describe('Apple count', function() {

        it('is defined', function() {
            expect(shoppingCart.apples).toBeDefined();
            expect(shoppingCart.apples).toBe(0);
        });
    });

    describe('Orange count', function() {

        it('is defined', function() {
            expect(shoppingCart.oranges).toBeDefined();
            expect(shoppingCart.oranges).toBe(0);
        });
    });

    describe('Special Offer One', function() {

        it('is defined', function() {
            expect(shoppingCart.specialOfferOne).toBeDefined();
            expect(shoppingCart.specialOfferOne).toBe(false);
        });
    });

    describe('Special Offer Two', function() {

        it('is defined', function() {
            expect(shoppingCart.specialOfferTwo).toBeDefined();
            expect(shoppingCart.specialOfferTwo).toBe(false);
        });
    });

// Check the arithmetic in the checkOut method for each special offer and if no special
// offer is chosen.
    describe('The default checkOut method', function(){

        beforeEach(function(){
            shoppingCart.apples = 4;
            shoppingCart.oranges = 9;
        });

        afterEach(function() {
            shoppingCart.apples = 0;
            shoppingCart.oranges = 0;
        });

        it('calculates the correct amount if no special offer is selected', function(){

            shoppingCart.checkOut();
            expect(shoppingCart.applesCost).toEqual(240);
            expect(shoppingCart.orangesCost).toEqual(225);
        });
    });

    describe('The 2 for 1 apples checkOut method', function(){

        beforeEach(function(){
            shoppingCart.apples = 4;
            shoppingCart.oranges = 9;
            shoppingCart.specialOfferOne = true;
        });

        afterEach(function() {
            shoppingCart.apples = 0;
            shoppingCart.oranges = 0;
            shoppingCart.specialOfferOne = false;
        });

        it('calculates the correct amount when 2 for 1 apples is selected', function(){

            shoppingCart.checkOut();
            expect(shoppingCart.applesCost).toEqual(120);
            expect(shoppingCart.orangesCost).toEqual(225);
        });
    });

    describe('The 3 for 2 oranges checkOut method', function(){

        beforeEach(function(){
            shoppingCart.apples = 4;
            shoppingCart.oranges = 9;
            shoppingCart.specialOfferOne = false;
            shoppingCart.specialOfferTwo = true;
        });

        afterEach(function(){
            shoppingCart.apples = 0;
            shoppingCart.oranges = 0;
            shoppingCart.specialOfferOne = false;
            shoppingCart.specialOfferTwo = false;
        });


        it('calculates the correct amount when 3 for 2 oranges is selected', function(){

            shoppingCart.checkOut();
            expect(shoppingCart.applesCost).toEqual(240);
            expect(shoppingCart.orangesCost).toBeCloseTo(150, 2);
        });
    });
}());
