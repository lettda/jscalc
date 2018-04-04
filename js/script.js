$(document).ready(() => {
  console.log("Ready to run the app!");
  $('button').click(() => {
    if ($('button').attr('value') == 'clear') {
      $('.calculationOutput').innerHTML = ' ';
    } else {
      $('.calculationOutput').append($('button').attr("value"));
    }
  });


});
