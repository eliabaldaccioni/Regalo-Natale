document.addEventListener("click", function startOnce() {
  const a = document.getElementById("music");
  a.volume = 0.1;
  a.play();
  document.removeEventListener("click", startOnce);
});
