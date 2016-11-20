'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(function() {
  window.setTimeout(function() { $('#liv').addClass('show-me') }, 1000);
  window.setTimeout(function() { $('#jay').addClass('show-me') }, 2000);
});

$('#videoButton').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.video').offset().top
  }, 500);
})

$('#playButton').on('click', function(e) {
  console.log('test')
  $(this).hide()
  $('#loading').show();

  var player = new YT.Player('theVideo', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        }
    });

  function onPlayerReady(event) {
    player.playVideo();
  }
  function onPlayerStateChange(event) {
    console.log(event.data);
    if (event.data === 1) {
      $('.video-cover').hide();
    }
    if (event.data === 0) {
      // player.seekTo(0);
      player.stopVideo();
      $('#playButton').show()
      $('#loading').hide();
      $('.video-cover').fadeIn();
    }
  }

})
