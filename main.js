// import "animate.css";
const cursor = document.querySelector(".mouse");
window.addEventListener("mousemove", function (e) {
  const x_position = e.clientX;
  const y_position = e.clientY;
  // console.log(x_position, y_position);
  cursor.style.top = y_position - 110 + "px";
  cursor.style.left = x_position - 110 + "px";
});
let lastvalue = 0;

window.addEventListener("scroll", function () {
  lastvalue = window.scrollY;
  console.log(lastvalue);
  if (lastvalue < 500) {
    cursor.style.backgroundColor = "#b23ab8";
    cursor.classList.add("transition");
  }
  if (lastvalue > 900) {
    cursor.style.backgroundColor = "#ffff";
    cursor.classList.add("transition");
  }
});
