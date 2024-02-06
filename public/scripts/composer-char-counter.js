const charCounter = function (text) {
  const count = text.length;
  return count + 1;
};


$(document).ready(function() {
  // --- our code goes here ---

  $( "#tweet-text" ).on( " input keypress", function() {
    const tweetText = $( "#tweet-text" ).val();
    const tweetTextCount = charCounter(tweetText);

    // console.log(tweetTextCount);

    $(".counter").val(140 - tweetTextCount);

    // console.log($("output"));

    if (tweetTextCount > 140) {
      // console.log('output is working!');
      $("output").addClass('red-char')
    } else {
      // console.log('output is working else!');
      $("output").removeClass('red-char')
    }  
  } );

});