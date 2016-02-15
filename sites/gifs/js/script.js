// sweet global variables
var url = 'https://www.reddit.com/r/gifs/hot.json',
    container = $('#gif-container'),
    gifs = [];

// loop through each one and append an <img> tag to the #gif-container
// if it ends in a particular extension
function addImages(obj) {
  // add gifs or gifvs
  if (obj.data.url.match(/.gif$/)) {
     $('<img src="' + obj.data.url + '">').appendTo(container);
  }  else if (obj.data.url.match(/.gifv$/)) {
    webmUrl = obj.data.url.replace(/.gifv$/, '.webm');
    $('<video autoplay="" loop="" muted=""><source type="video/webm" src="' + webmUrl + '"></video>').appendTo(container);
  }
}

// main function
$(document).ready(function () {
  $.getJSON(url, function(data) {
    console.log(data.data);
    var posts = data.data.children;
    posts.map(addImages);
  });
});
