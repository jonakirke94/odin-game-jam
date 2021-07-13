import render from "./render";

const game = () => {
  // eslint-disable-next-line no-unused-vars
  const ui = render();

  const init = () => {
    // eslint-disable-next-line no-console
    console.log("initiated game");

    ui.init();
  };

  return {
    init,
  };
};

export default game;
