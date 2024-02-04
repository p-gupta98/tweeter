/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  console.log('hello!');

  // $.ajax({
  //   url: '/tweets',
  //   method: 'GET',
  //   success: (response) => {
  //     console.log(response);
  //   }
  // });

  const tweetdb = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1706825000175
  }

  const createTweet = () => {
    const $tweet = $(`

    <article class="tweet">
      <header>
        <div class="user">
          <div class="profile">
            <img src=${tweetdb.user.avatars}>
            <h3>${tweetdb.user.name}</h3>
          </div>
          <h3>${tweetdb.user.handle}</h3>
        </div>
        <div>
          <p>
          ${tweetdb.content.text}
          </p>
        </div>
      </header>
            
      <footer>

        <div>
          <h4>10 days ago</h4>
        </div>
              
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
  
  const $tweet = createTweet();
  const $tweetContainer = $('#tweet-container');

  $tweetContainer.prepend($tweet);
  console.log('$tweetContainer', $tweetContainer);

});