(function() {
  var p = "https://github.com/shaneriley/sausages/raw/master/source/",
      img = document.createElement("img"),
      a = document.createElement("audio"),
      src = document.createElement("source"),
      ctx = document.createElement("canvas").getContext("2d"),
      m = document.createElement("canvas").getContext("2d"),
      w = 240, h, frames, frame = 0;
  var draw = function() {
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, -(frame * w), 0);
    if (++frame < frames) {
      setTimeout(draw, 1000 / 24);
    }
    else {
      ctx.canvas.parentElement.removeChild(ctx.canvas);
    }
  };

  a.setAttribute("autoplay", true);
  a.src = "audio/sausages.mp3";
  img.src = "images/sausages.png";
  img.onload = function() {
    ctx.canvas.width = w;
    ctx.canvas.height = h = img.height;
    frames = img.width / w;
    draw();
  };
  document.body.appendChild(ctx.canvas);
  ctx.canvas.style.cssText = "position: fixed; left: " + ((window.innerWidth - w) / 2) + "px; top: 0; z-index: 10000000;"
})();
