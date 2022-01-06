function initparticles() {
  bubbles();
}

function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    var bubblecount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= bubblecount; i++) {
      var size = $.rnd(40, 80) / 10;
      $(this).append(
        '<span class="particle" style="top:' +
          $.rnd(20, 80) +
          "%; left:" +
          $.rnd(0, 95) +
          "%;width:" +
          size +
          "px; height:" +
          size +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></span>'
      );
    }
  });
}
