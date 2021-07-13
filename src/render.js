const render = () => {
  const init = (doorClicked) => {
    document.querySelector("#app").innerHTML = `
		<h1>Hello from render.js!</h1>
	`;

    const room = document.querySelector("#room");

    const left = document.createElement("div");
    left.classList.add("box", "left");
    left.addEventListener("click", () => {
      doorClicked("left");
    });

    const right = document.createElement("div");
    right.classList.add("box", "right");
    right.addEventListener("click", () => {
      doorClicked("right");
    });

    room.appendChild(left);
    room.appendChild(right);
  };

  return {
    init,
  };
};

export default render;
