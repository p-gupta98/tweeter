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

  const $tweet = $(`

    <article class="tweet">
      <header>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
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

  const $tweetContainer = $('#tweet-container');

  $tweetContainer.prepend($tweet);
  console.log('$tweetContainer', $tweetContainer);

});