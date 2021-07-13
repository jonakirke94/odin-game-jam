const render = () => {
  const init = () => {
    document.querySelector("#app").innerHTML = `
		<h1>Hello from render.js!</h1>
	`;
  };

  return {
    init,
  };
};

export default render;
