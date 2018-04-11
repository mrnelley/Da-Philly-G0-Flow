$(document).ready(function() {
  /*!
   * jQuery extend-based plugin radiojar currentShow
   * Author: @marmetaxa
   * Licensed under the MIT license
   */



  /*
   * This plugin returns the show currently playing.
   *
   *
   * Available options:
   * {
   *  'streamname': the streamname of the station
   *  }
   */

  // RJP.currentShow = function($, $objcurrshow, options) {
  //   var settings = jQuery.extend({}, options);
  //   RJP.updateShowEvent = jQuery.Event("show-change-event");
  //   RJP.trackLoadEvent = jQuery.Event("track-load-event")
  //   var station_streamname = options.streamname;
  //   var upcomingInterval;
  //   var schedulesInterval;
  //   var stationSchedules;
  //   var currentShowID;
  //   RJP.getShowState = function(startIn, endIn) {
  //     var state = "";
  //     var start = new Date(startIn);
  //     var end = new Date(endIn);
  //     var now = new Date();
  //     if (now.getTime() < start.getTime()) {
  //       state = "future";
  //     } else
  //     if (now.getTime() > end.getTime()) {
  //       state = "past";
  //     } else
  //     if ((now.getTime() >= start.getTime()) && (now.getTime() <= end.getTime())) {
  //       state = "is_now";
  //     }
  //     return state;
  //   }
  //
  //   RJP.findCurrentSchedule = function(events) {
  //     var foundCurrentShow = false;
  //     if (events) {
  //       for (var i = 0; i < events.length; i++) {
  //         if (events[i].show != null) {
  //           var startDate = new Date(events[i].start_date);
  //           var endDate = new Date(events[i].start_date);
  //           (endDate).setMinutes((endDate).getMinutes() + (events[i].duration / 60));
  //           var repeatType = events[i].repeat_type;
  //           if (repeatType == 1) {
  //             var state = RJP.getShowState(startDate, endDate);
  //             if (state == "past") {
  //               foundCurrentShow = true;
  //               if (!currentShowID || events[i].show != currentShowID) {
  //                 currentShowID = events[i].show;
  //                 console.log(currentShowID);
  //                 RJP.getShow(events[i].show);
  //               }
  //             } else {
  //               console.log(state);
  //             }
  //           } else {
  //             var endingRepeat = new Date(events[i].repeat_ends_on);
  //             var today = new Date();
  //             if (today.getTime() >= startDate.getTime() && today.getTime() < endingRepeat.getTime()) {
  //               var weekDayToday = today.getDay();
  //               if (repeatType == 2 ||
  //                 (repeatType == 3 && weekDayToday == startDate.getDay()) ||
  //                 (repeatType == 4 && [6, 0].indexOf(weekDayToday) >= 0) ||
  //                 (repeatType == 5 && [5, 1, 2, 3, 4].indexOf(weekDayToday) >= 0)) {
  //                 var todayStartDate = new Date();
  //                 todayStartDate.setHours(startDate.getHours());
  //                 todayStartDate.setMinutes(startDate.getMinutes());
  //                 todayStartDate.setSeconds(0);
  //                 var todayEndDate = new Date();
  //                 todayEndDate.setHours(endDate.getHours());
  //                 todayEndDate.setMinutes(endDate.getMinutes());
  //                 todayEndDate.setSeconds(0);
  //                 var repeating_events_state = RJP.getShowState(todayStartDate, todayEndDate);
  //                 if (repeating_events_state == "is_now") {
  //                   foundCurrentShow = true;
  //                   if (!currentShowID || events[i].show != currentShowID) {
  //                     currentShowID = events[i].show;
  //                     RJP.getShow(events[i].show);
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (!foundCurrentShow) {
  //       RJP.updateShowEvent.data = null;
  //       $objcurrshow.trigger(RJP.updateShowEvent, null);
  //     }
  //   }
  //
  //   RJP.getSchedules = function() {
  //     $.ajax({
  //       url: RJP.baseUrl + "/api/stations/" + station_streamname + "/schedules/",
  //       type: 'GET',
  //       dataType: 'json',
  //       async: true,
  //       success: function(data) {
  //         stationSchedules = data;
  //         RJP.findCurrentSchedule(data);
  //       },
  //       error: function(xhr, ajaxOptions, thrownError) {
  //
  //       }
  //     });
  //
  //   }
  //
  //
  //   RJP.getShow = function(key) {
  //     $.ajax({
  //       url: "http://www.radiojar.com/api/stations/uzg3ga4mb/schedules/shows/"+ key,
  //       type: 'GET',
  //       dataType: 'json',
  //       async: true,
  //       success: function(data) {
  //         RJP.updateShowEvent.data = data;
  //         $objcurrshow.trigger(RJP.updateShowEvent, data);
  //         $objcurrshow.trigger(RJP.trackLoadEvent, data);
  //       },
  //       error: function(xhr, ajaxOptions, thrownError) {
  //         console.log(thrownError);
  //       }
  //     });
  //   }
  //
  //   clearInterval(upcomingInterval);
  //   clearInterval(schedulesInterval);
  //   RJP.getSchedules();
  //   schedulesInterval = setInterval(function() { // get schedules every 30 minutes
  //     RJP.getSchedules();
  //   }, 1800000);
  //
  //   upcomingInterval = setInterval(function() { // update upcoming json every minute
  //     RJP.findCurrentSchedule(stationSchedules);
  //   }, 60000);
  //
  //   return $objcurrshow.each(function() {});
  // }

 //  rjq('.current-info').radiojar('currentShow', {
 //    "streamname": "uzg3ga4mb",
 //    "enableUpdates": true,
 //    "defaultImage": "//www.radiojar.com/img/sample_images/Radio_Stations_Avatar_BLUE.png",
 //    "autoplay":false
 //  });
 //
 //  rjq('#rjp-currentshow').off('track-load-event');
 //  rjq('#rjp-currentshow').on('track-load-event', function(event, data) {
 //    console.log(data);
 //    updateInfo(data);
 //    if (data.title != "" || data.artist != "") {
 //     rjq('.rjp-trackinfo-container').show();
 //     rjq('#trackInfo').html(data.artist + ' - "' + data.title + '"')
 //    } else {
 //     rjq('.rjp-trackinfo-container').hide();
 //    }
 //  });
 //
 // function updateInfo(data) {
 //   if (data.thumb) {
 //     rjq('#rj-cover').html('<a href="#"><img src="' + data.thumb + '" alt="" title="" /></a>')
 //   } else {
 //     rjq('#rj-cover').html('')
 //   }
 //  }
 //
 //
  $('.button').click(function() {
 //    var audioElement = $('audio');
    $('.button').toggleClass('paused');
 //    // console.log(audioElement);
 //    return audioElement.get(0).paused ? audioElement.get(0).play() : audioElement.get(0).pause();
  });

 rjq('#rjp-radiojar-player').radiojar('player', {
  "streamName": "uzg3ga4mb",
  "enableUpdates": true,
  "defaultImage": "http://radiojar.com/img/sample_images/Radio_Stations_Avatar_BLUE.png",
  "autoplay":false
 });
 rjq('#rjp-radiojar-player').off('rj-track-load-event');
 rjq('#rjp-radiojar-player').on('rj-track-load-event', function(event, data) {
   updateInfo(data);
   if (data.title != "" || data.artist != "") {
     rjq('.rjp-trackinfo-container').show();
     rjq('#trackInfo').html(data.artist + ' - "' + data.title + '"')
   } else {
     rjq('.rjp-trackinfo-container').hide();
   }
 });

 function updateInfo(data) {
   if (data.thumb) {
     rjq('#rj-cover').html('<a href="#"><img src="' + data.thumb + '" alt="" title="" /></a>')
   } else {
     rjq('#rj-cover').html('')
   }
 }
});
