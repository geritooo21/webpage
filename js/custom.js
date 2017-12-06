$(document).on('click','#like',function(){
  var c = $('#likes').text();
  var counter = parseInt(c);
  counter = counter +1;
  var result = counter.toString();
  $("likes").text(counter);
});
