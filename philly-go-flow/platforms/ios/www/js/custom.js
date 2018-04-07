$(document).ready(function() {
  $('#player').click(function () {
    var audioElement = $('audio');
    $('button').toggleClass('paused');
    console.log(audioElement);
    return audioElement.get(0).paused ? audioElement.get(0).play() : audioElement.get(0).pause();
  });


});
