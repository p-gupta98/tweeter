/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(() => {

  const $tweetContainer = $('#tweet-container');
  const $newTweetForm = $('#new-tweet-form');
  
  
  const $error = $('#error');
  const $errorText = $('#error-text');

  //timeago
  //const readableTime = timeago.format(createdAt);

  //Cross-site scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const tweets = [ 
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac"
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants"
      },
      created_at: 1706825000175
    },

    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd" },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    },

    {
      user: {
        name: "Einstein",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd" },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    }

  ];

  const createTweet = (tweet) => {
    const $tweet = $(`
    <article class="tweet">
      <header>
        <div class="user">
          <div class="profile">
            <img src=${escape(tweet.user.avatars)}>
            <h3>${escape(tweet.user.name)}</h3>
          </div>
          <h3>${escape(tweet.user.handle)}</h3>
        </div>
        <div>
          <p>${escape(tweet.content.text)}</p>
        </div>
      </header>
      <footer>
      <div class="timeago" >${timeago.format(tweet.created_at)}</div>
              
        <div class="tweet-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
    return $tweet;
  };

  const renderTweet = (tweets) => {
    $tweetContainer.empty();

    
    for (const tweet of tweets) {
      const $tweet = createTweet(tweet);
      // $tweetTime.text(format(tweet.created_at));
      $tweetContainer.prepend($tweet);
    }
  };

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: (tweets) => {
        console.log(tweets);
        renderTweet(tweets);
      }
    });
  };

  $error.hide();

  $newTweetForm.on('submit', (event) => {
    event.preventDefault();

    //Form validation
    const $tweetText = $('#tweet-text').val();
    
    // const $errorText = $('')

    if (!$tweetText) {
      $error.show();
      $errorText.text('Your tweet is empty');


      setTimeout(() => {
        $error.hide();
    }, 3000); // Hide the error message after 3 seconds


    } else if (($tweetText.length + 1) > 140) {
      $error.show();
      $errorText.text('Your tweet is too long');


      setTimeout(() => {
        $error.hide();
    }, 3000); // Hide the error message after 3 seconds


    } else  {
      //serialize the form data
      const data = $newTweetForm.serialize();
      console.log('hello form');

      

      //Post the data
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: data,
        success: (response) => {
          console.log(response);
          $('#tweet-text').val(''); // Clear the input field
          loadTweets();
        },
        error: (error) => {
          // Code to execute on error
        }
      });

    };

  });

  $error.hide();
  $errorText.text('');

});