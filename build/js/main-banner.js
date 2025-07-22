window.addEventListener("load", function() {
  var body = document.getElementsByTagName('body')[0];
  if(body.offsetWidth > 1199) {
    var container = document.getElementById('videoContainer');
    container.innerHTML = "";
    var video = document.createElement("video");
    video.setAttribute("poster", "images/content/main-banner/media@2x.jpg");
    video.setAttribute("muted", "muted");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("loop", "loop");
    var source_1 = document.createElement("source");
    source_1.type = "video/mp4";
    source_1.src = "https://www.sibircentr.ru/images/content/siberia_2025.mp4";
    video.appendChild(source_1);
    container.appendChild(video);
    video.muted = "true";
    video.play();
  }
});
