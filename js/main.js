// Initialize shopping cart object
var shoppingCart = {
    "apples": 0,
    "oranges": 0,
    "specialOfferOne": false,
    "specialOfferTwo": false,
    "applesCost": 0,
    "orangesCost": 0,

    /* When an apple is clicked the event handler at the bottom of this script 
    calls the addApple() function.
    */
    addApple: function(){
        shoppingCart.apples += 1;
        // Cause text to flash alerting user that an apple has been added
        $("#appleAdded").css('visibility', 'visible');
        setTimeout(function(){
            $("#appleAdded").css('visibility', 'hidden');
        }, 800);
    },
    /* Same implementation as addApple() */
    addOrange: function(){
        shoppingCart.oranges += 1;
        $("#orangeAdded").css('visibility', 'visible');
        setTimeout(function(){
            $("#orangeAdded").css('visibility', 'hidden');
        }, 800);
    },
    /* When the Special Offers tag is clicked it is replaced by buttons explaining the offers */
    selectSpecialOffer: function(){
        var specialOfferHTML = "<div id='specialOfferHTML' class='col-md-6'><h2 id='offerText'>Please choose an offer</h2><div class='col-md-offset-3 col-md-2'><button id='specialOfferOne' class='btn img-rounded' style='font-size:20px'>2 for 1 Apples!</button></div><div class='col-md-offset-2 col-md-2'><button id='specialOfferTwo' class='btn img-rounded' style='font-size:20px'>3 for 2 Oranges!</button></div></div>";
        $('#specials').replaceWith(specialOfferHTML);
        $('#specialOfferOne').on('click', function(){
            // Set the appropriate Special Offer property to true
            shoppingCart.specialOfferOne = true;
            $('#specialOfferHTML').replaceWith("<h2 id='selection'>You have selected 2 for 1 Apples.</h2>");
        });
        $('#specialOfferTwo').on('click', function(){
            // Set the appropriate Special Offer property to true
            shoppingCart.specialOfferTwo = true;
            $('#specialOfferHTML').replaceWith("<h2 id='selection'>You have selected 3 for 2 Oranges.</h2>");
        });
    },
    checkOut: function(){
        // Determines if a Special Offer has been selected and calculates the total accordingly
        if (shoppingCart.specialOfferOne){
            shoppingCart.applesCost = (shoppingCart.apples / 2) * 60;
            shoppingCart.orangesCost = shoppingCart.oranges * 25;
            var totalCost = shoppingCart.applesCost + shoppingCart.orangesCost;
        } else if (shoppingCart.specialOfferTwo){
            shoppingCart.applesCost = shoppingCart.apples * 60;
            shoppingCart.orangesCost = ((shoppingCart.oranges / 3) * 2) * 25;
            var totalCost = shoppingCart.applesCost + shoppingCart.orangesCost;
        } else {
            shoppingCart.applesCost = shoppingCart.apples * 60;
            shoppingCart.orangesCost = shoppingCart.oranges * 25;
            var totalCost = shoppingCart.applesCost + shoppingCart.orangesCost;
        }
        // Format the amount calculated
        totalCost /= 100;
        var formattedCost = "$"+ totalCost + "00";
        formattedCost = formattedCost.substring(0, 5);

        // Display correct amount in the browser
        $('.modal-body').empty();
        var modalHTML = "<p>You ordered <span class='quantity'>%numApples%</span> Apples and <span class='quantity'>%numOranges%</span> Oranges.</p><p>The amount due is <span class='amountDue'>%amt%</span>.</p>";
        var formattedModalHTML = modalHTML.replace('%numApples%', shoppingCart.apples).replace('%numOranges%', shoppingCart.oranges).replace('%amt%', formattedCost);
        $('.modal-body').append(formattedModalHTML);
    },
    clearCart: function(){
        shoppingCart.apples = 0;
        shoppingCart.oranges = 0;
        shoppingCart.specialOfferOne = false,
        shoppingCart.specialOfferTwo = false,
        shoppingCart.applesCost = 0;
        shoppingCart.orangesCost = 0;
        $('.modal-body').empty();
        var specials = "<div id='specials' class='col-offset-5 col-md-1'><img id='tag' src='images/specialoffer.png' alt='special offers'></div>";
        $('#selection').replaceWith(specials);
        $('#specialOfferHTML').replaceWith(specials);
    }
};
// Event listeners for all shoppingCart functions.
$(document).ready(function(){
    $('#appleImg').on('click', shoppingCart.addApple);
    $('#orangeImg').on('click', shoppingCart.addOrange);
    $('#checkout').on('click', shoppingCart.checkOut);
    $('#specials').on('click', shoppingCart.selectSpecialOffer);
    $('.modal').on('click', shoppingCart.clearCart);
});




