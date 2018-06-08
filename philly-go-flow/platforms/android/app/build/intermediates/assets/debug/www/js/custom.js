$(document).ready(function() {
  // Album Artwork Solution
  var currentPhoto = $(trackInfo).attr('src');
  $(document).on("trackChange", function(eventData){
    let artist = eventData.eventData.artist;
    let album = eventData.eventData.album;
    let photoUrl = eventData.eventData.thumb;
    console.log('photo : ', photoUrl, "goodstuff : ", artist);
    $(currentPhoto).attr('src', photoUrl);
  })

  function updateInfo(data) {
    if (data.thumb) {
      rjq('#rj-cover').html('<a href="#"><img src="' + data.thumb + '" alt="" title="" /></a>')
    } else {
      rjq('#rj-cover').html('')
    }
  }

  //Play & Pause Functionality
  $('.play-pause').click(function() {
    var audioElement = $('audio');
    $('.play-pause').toggleClass('paused');
    return audioElement.get(0).paused ? audioElement.get(0).play() : audioElement.get(0).pause();
  });

// rjq library only works for web application
 rjq('#rjp-radiojar-player').radiojar('player', {
  "streamName": "uzg3ga4mb",
  "enableUpdates": true,
  "defaultImage": "../img/PGF.png",
  "autoplay":false
 });

 rjq('#rjp-radiojar-player').off('rj-track-load-event');
 rjq('#rjp-radiojar-player').on('rj-track-load-event', function(event, data) {

   $.event.trigger({
     type: "trackChange",
     eventData: data
   });

   $('#rj-cover').toggleClass('turned');
   updateInfo(data);
   if (data.title != "" || data.artist != "") {
     rjq('.rjp-trackinfo-container').show();
     rjq('#trackInfo').html(data.artist + ' - "' + data.title + '"')
   } else {
     rjq('.rjp-trackinfo-container').hide();
   }
 });

});
