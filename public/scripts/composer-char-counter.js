const charCounter = function (text) {
  const count = text.length;
  return count + 1;
};

// const maxCount = function (text) {
//   // console.log("text", text);
//   const max = 140;
//   const count = charCounter(text);

//   if (count < max) {
//     console.log('true');
//   } 

//   console.log(false);
// };

$(document).ready(function() {
  // --- our code goes here ---

  $( "#tweet-text" ).on( "keypress", function() {
    const tweetTextCount = charCounter($( "#tweet-text" ).val());

   $(".counter").val(140 - tweetTextCount)
  } );

  

});