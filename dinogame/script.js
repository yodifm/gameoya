const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const plant = document.getElementById("plant");


function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left"),
  );
  let plantLeft = parseInt(
    window.getComputedStyle(plant).getPropertyValue("left"),
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Ulang lagi yaaa :D");
  }
  if (plantLeft < 50 && plantLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Ulang lagi yaaa :D");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});