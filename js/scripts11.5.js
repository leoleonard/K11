$(document).ready(function(){

  function Button(text) {
  	this.text = text || 'Hello';
  }

  Button.prototype = {
    create: function () {
      var self = this;
      this.$element = $('<button>');
		  this.$element.text(this.text);
      this.$element.click(function() {
	       alert(self.text);
});
      this.$element.appendTo($('body'));
    }
  }

  var btn1 = new Button('Hello!');
  btn1.create();

  var btn2 = new Button("Cześć!");
  btn2.create();

  var btn3 = new Button();
  btn3.create();


});
