$(document).ready(function() {

  $("#ead-toggle").on("click", function(action) {

    if ($(".orig")[0]){
      flattenEad();
    }
    else {
      indentEad();
    }

  });

});

$(document).on("click", ".alt", altToggle);  
$(document).on("click", "#sample-search-button", searchResults);
$(document).on("click", "fa-inventory", showFirst);
$(document).on("click", "#show-ref1", toggleFirst);
$(document).on("click", "#hide-ref1", toggleFirst);
$(document).on("click", "#show-ref2", toggleSecond);
$(document).on("click", "#hide-ref2", toggleSecond);
$(document).on("click", "#show-ref3", toggleThird);
$(document).on("click", "#hide-ref3", toggleThird);
$(document).on("click", "#show-ref4", toggleFourth);
$(document).on("click", "#hide-ref4", toggleFourth);



function flattenEad() {
  var flat = '<p class="alt"><span class="fade">Series I: Artist Files</span><span class="hidden code">{ :title => "Series I: Artist Files" }</span></p>'
           + '<p class="alt"><span class="bold">Beastie Boys</span><span class="hidden code">{ :title => "Beastie Boys", :parents => ["Series I: Artist Files"] }</span></p>'
           + '<p class="alt"><span class="bold">Dylan, Bob</span><span class="hidden code">{ :title => "Dylan, Bob", :parents => ["Series I: Artist Files"] }</span></p>'
           + '<p class="alt"><span class="fade">Audiovisual Materials</span><span class="hidden code">{ :title => "Audiovisual Materials" }</span></p>'
           + '<p class="alt"><span class="fade">Audio</span><span class="hidden code">{ :title => "Audio", :parents => ["Audiovisual Materials"] }</span></p>'
           + '<p class="alt"><span class="bold">David Bowie</span><span class="hidden code">{ :title => "David Bowie", :parents => ["Audiovisual Materials", "Audio"] }</span></p>'
           + '<p class="alt"><span class="fade">Video</span><span class="hidden code">{ :title => "Video", :parents => ["Audiovisual Materials"] }</span></p>'
           + '<p class="alt"><span class="bold">Van Halen</span><span class="hidden code">{ :title => "Van Halen", :parents => ["Audiovisual Materials", "Video"] }</span></p>';
  
  $('#ead').html(flat);
  $('#ead').removeClass('orig');
};

function indentEad() {

  var orig = '<ul class="folder"><li>Series I: Artist Files<ul><li>Beastie Boys</li><li>Dylan, Bob</li></ul></li><li>Audiovisual Materials<ul class="folder"><li>Audio<ul><li>David Bowie</li></ul></li><li>Video<ul><li>Van Halen</li></ul></li></ul></li></ul>';
  $('#ead').html(orig);
  $('#ead').addClass('orig');

};

function altToggle() {
  $(this).find('span').toggleClass('hidden');
}

function searchResults() {
  $("#search-results").toggleClass("hidden")
}

function showFirst () {
  var content = "<h3>Series I: Artist Files</h3><h3>Audiovisual Materials</h3>"
}

function toggleFirst () {
  $("div#ref1").toggleClass("hidden");
  $("i#hide-ref1").toggleClass("hidden");
  $("i#show-ref1").toggleClass("hidden");
}

function toggleSecond () {
  $("div#ref2").toggleClass("hidden");
  $("i#hide-ref2").toggleClass("hidden");
  $("i#show-ref2").toggleClass("hidden");
}

function toggleThird () {
  $("div#ref3").toggleClass("hidden");
  $("i#hide-ref3").toggleClass("hidden");
  $("i#show-ref3").toggleClass("hidden");
}

function toggleFourth () {
  $("div#ref4").toggleClass("hidden");
  $("i#hide-ref4").toggleClass("hidden");
  $("i#show-ref4").toggleClass("hidden");
}



