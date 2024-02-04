/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const $tweetContainer = $('#tweet-container');

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
            <img src=${tweet.user.avatars}>
            <h3>${tweet.user.name}</h3>
          </div>
          <h3>${tweet.user.handle}</h3>
        </div>
        <div>
          <p>${tweet.content.text}</p>
        </div>
      </header>
      <footer>
        <div> <h4>10 days ago</h4></div>
              
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
    for (const tweet of tweets) {
      const $tweet = createTweet(tweet);
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

  loadTweets();

});