$('.add-button').click(function(e) {
  $('figure').slideToggle();
  if($(this).text() == 'Show Puppy') {
    $(this).text('Hide Puppy');
  } else {
    $(this).text('Show Puppy');
  }
});