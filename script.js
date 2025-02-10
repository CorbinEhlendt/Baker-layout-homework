$( document ).ready(function() {
    console.log( "ready!" );
$('#laundrey').draggable();

});

$(document)
  .on(
    'click', 
      (event)=> 
      {
        let $clicked = $('#'+event.target.id );                
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
        })