import jQuery from 'jquery';
window.$ = jQuery;

import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import './sass/style.scss';

import cardTemplate from './handlebars-init';

var iso = {};

$(document).ready(function() {

  $("#title-hashtag").text(window.hashtagWallConfig.hashtag);

  $.getJSON(window.hashtagWallConfig.apiBaseUrl + "/posts", function(posts) {

    posts.forEach(function(item) {

      var itemDate = new Date(item.time);

      $("#card-container").append(cardTemplate(item));

    });

    imagesLoaded("#card-container", function() {

      iso = new Isotope("#card-container", {
        itemSelector: ".card",
        transitionDuration: 0,
        masonry: {
          columnWidth: '.card',
          gutter: parseInt($('.card:first-of-type').css('marginBottom').substr(0, 2)),
          fitWidth: true
        }
      });

    });

  });

  setInterval(updateFeed, window.hashtagWallConfig.updateInterval);

});

function updateFeed() {

  var timestamp = new Date($("#card-container .card:first-of-type").data('time'));

  timestamp = timestamp.getTime();

  $.getJSON(window.hashtagWallConfig.apiBaseUrl + "/posts/" + timestamp, function(posts) {

    if(posts.length > 0) {

      var elements = [];

      posts.forEach(function(post) {

        var elem = $(cardTemplate(post)).get(0);

        elements.push(elem);

      });

      $("#card-container").prepend(elements);

      imagesLoaded("#card-container", function() {

        iso.prepended(elements);

      });

    }

  });

}
