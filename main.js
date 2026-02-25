onload = () =>{
    document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("playMusic");

  btn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();
    btn.style.display = "none"; // tombol hilang setelah klik
  });
});

