$(function() {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    };

//COLUMN

    function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
    	//tworzenie kolumn
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

      //podpinanie odpowiednich zdarzen
      $columnDelete.click(function() {
          self.removeColumn();
      });
        //add a note after a click on the button
      $columnAddCard.click(function (event) {
        self.addCard(new Card(prompt("Enter the name of the card")));
      })
      //kontruowanie kolumny i jej wywolanie
      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);

        return $column;

    }
  };

      Column.prototype = {
        addCard: function(card) {
          this.$element.children("ul").append(card.$element);
        },
        removeColumn: function() {
          this.$element.remove();
        }
      };

//CARD
      function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.$element = createCard();

        function createCard() {
          //tworzenie elementow karty
          var $card = $('<li>').addClass('card');
          var $cardDescription = $('<p>').addClass('card-description').text(self.description);
          var $cardDelete = $('<button>').addClass('btn-delete').text('delete a card');
          // podpisanie zdarzen
          $cardDelete.click(function(){
                      self.removeCard();
          });
          //kontruowanie karty
          $card.append($cardDelete)
	              .append($cardDescription);
          return $card;
        }
      }

      Card.prototype = {
	       removeCard: function() {
		     this.$element.remove();
       }
     };


     var board = {
       name: 'Tablica',
       addColumn: function(column) {
         this.$element.append(column.$element);
         initSortable();
       },
       $element: $('#board .column-container')
};

      function initSortable() {
        $('.column-card-list').sortable({
          connectWith: '.column-card-list',
          placeholder: 'card-placeholder'
        }).disableSelection();
};

      $('.create-column').click(function(){
        var name = prompt('Enter a column name');
        var column = new Column(name);
        board.addColumn(column);
      });

      // CREATING COLUMNS
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATING CARDS
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');
var card3 = new Card("Things have been done");
// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);
doneColumn.addCard(card3);


})
