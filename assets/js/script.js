document.addEventListener("mousemove", parallax);

function parallax(e) {
  const back = document.getElementById("back");
  const middle = document.getElementById("middle");
  const front = document.getElementById("front");

  let x = e.clientX - window.innerWidth / 2;
  let y = e.clientY - window.innerHeight / 2;

  let backX = x * 0.003;
  let middleX = x * -0.003;
  let frontX = x * 0.04;

  let backY = y * 0.005;
  let middleY = y * -0.005;
  let frontY = y * 0.042;

  back.style.transform = `translateX(${backX}%) translateX(${backY}%)`;
  middle.style.transform = `translateX(${middleX}%) translateX(${middleY}%)`;
  front.style.transform = `translateX(${frontX}%) translateX(${frontY}%)`;
}
