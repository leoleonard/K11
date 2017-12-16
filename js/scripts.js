function Phone (brand, price, color, banking) {
  this.brand = brand;
  this.price = price;
	this.color = color;
  this.mobilebanking = banking;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "$.");
}

var iPhone6S = new Phone("Apple", 2250, "silver", true, "'' 7");
var SamsungGalaxy = new Phone("Samsung", 1700, "white", false, "5");
var BlackBerry = new Phone("BlackBerry", 1800, "white", true, "6");


Phone.prototype.printMB = function () {
  if (this.mobilebanking == true) {
    console.log(this.brand + " cooperates with a mobile banking.");
  } else {
      console.log(this.brand + " does not cooperate with a mobile banking.")
    }
  }


iPhone6S.printInfo();
SamsungGalaxy.printInfo();
BlackBerry.printInfo();

iPhone6S.printMB();
SamsungGalaxy.printMB();


function Apps (brand, instagram, facebook) {
  this.brand = brand;
  this.instagram = instagram;
  this.facebook = facebook
}

Apps.prototype.printApp = function() {
  if (this.instagram == true && this.facebook) {
  console.log(this.brand + " operates Instagram and Facebook");
} else if (this.instagram == true || this.facebook == true) {
  console.log(this.brand + " operates one Social Media apps");
} else {
    console.log(this.brand + " does not operate a Social Media apps");
  }
}

var iPhone6s = new Apps ("iPhone6s", true, true);
var Nokia = new Apps ("Nokia", true, false);
var Motorolla = new Apps ("Motorolla", false, false);
iPhone6s.printApp();
Nokia.printApp();
Motorolla.printApp();
