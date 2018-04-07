$(document).ready(function() {
  $('#stream').click(function () {
      $(this).toggleClass('pause-sprite');
      audioElement.play();
  });
  $('#stream').click(function () {
      audioElement.pause();
  });
});
