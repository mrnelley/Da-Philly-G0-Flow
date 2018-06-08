$(document).ready(function() {
  // Album Artwork Solution
  $(document).on("trackChange", function(eventData){
    var artist = eventData.eventData.artist;
    var album = eventData.eventData.album;

    var song = $('#trackInfo')
    var songDataArray = song[0].innerHTML.replace(/"/g, "").split('-');
    var playingTrack = songDataArray[songDataArray.length-1]

    var photoUrl = eventData.eventData.thumb;

    var currentPhoto = $(trackInfo).attr('src');
    $(currentPhoto).attr('src', photoUrl);

    if(album == 'Unknown'){
      // queueRequest = function(artist, photo, url) {
      //   if(played[played.length - 1]) {
      //     played[played.length - 1].abort();
      //   }
      var currentTrack = $.get({
        url:`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=72fb26b4a15ccc71233b61d94cc275bf&artist=${encodeURIComponent(artist.trim())}&track=${playingTrack.trim()}`,
        context: document.body
      }).done((data)=>{
        console.log(artist);
        console.log(album);
        console.log(data);
      })
      //photoUrl = something
    }else{
      // console.log('photo is different');
    }
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
    $('.play-pause').toggleClass('active');
    return audioElement.get(0).active ? audioElement.get(0).play() : audioElement.get(0).pause();
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
     // rjq('.rjp-trackinfo-container').hide();
   }
 });

});
