// lets create a wrapper function that waits for the html doc to load
$(document).ready(function() {
  //add am event listener, that listens for a click on the id #add ( add button)
  //telling jquery go to the class add and when you click on it you .. do what the function tells you to do
 $('#add').click(function() {
  //want to grab the user input, store it, use it later on

   var userInput = $('input[name=shopping-list-item]').val();

   //test the user input, make sure we are grabbing the value
   console.log(userInput);

   //add user input to the DOM as a list item
   //inside the list iten w have an input & comes in the form of the check box
   $('.list').append('<li>' + '<input class="checked-item" type="checkbox">' + userInput + "</li>");


     return false;
    })


  //keep track of the user toggling each item and create an event listener

  $(document).on('click', '.checked-item', function (){

    //capture the current list item the user is clicking on
      //when you click on this it is being activiated, need to use this to remove it to
    $(this).parent().toggleClass('is-it-checked');
  })
  //add an event listener to the check button
  $ (".check-list").on('click', function(e){

    //prevent the default browser/ form action from happening
    //stops the browser from refreshing itself & doesnt erase the state that it is in

    e.preventDefault();

    //remove the check-ed items
    $ ('.is-it-checked').remove();
  });


  //add an event listener to the reset button

  // $('.li').remove();
  $('.rest-list').on('click', function(e){

    e.preventDefault();

    $('li').remove();

  })
})
