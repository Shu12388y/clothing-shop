// import "animate.css";
window.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".mouse");
  const x_position = e.clientX;
  const y_position = e.clientY;
  console.log(x_position, y_position);
  cursor.style.top = y_position + "px";
  cursor.style.left = x_position + "px";
});
