var shoppingCart = {
    apples: 0,
    oranges: 0,
    specialOfferOne: false,
    specialOfferTwo: false
};

shoppingCart.prototype.addApple = function(){
    this.apples += 1;
};

shoppingCart.prototype.addOrange = function(){
    this.oranges += 1;
};

shoppingCart.prototype.checkOut = function(){
    if (specialOfferOne){
        var totalApples = (this.apples / 2) * 60;
        var totalOranges = this.oranges * 25;
        var totalCost = totalApples + totalOranges;
    } else if (specialOfferTwo){
        var totalApples = this.apples * 60;
        var totalOranges = ((this.oranges / 3) * 2) * 25;
        var totalCost = totalApples + totalOranges;
    } else {
        var totalApples = this.apples * 60;
        var totalOranges = this.oranges * 25;
        var totalCost = totalApples + totalOranges;
    }
};


$('#appleImg').on('click', shoppingCart.addApple);
$('#orangeImg').on('click', shoppingCart.addOrange);
$('.checkout').on('click', shoppingCart.checkOut);

