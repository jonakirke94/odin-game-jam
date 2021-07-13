import render from "./render";

const game = () => {
  const ui = render();

  const doorClicked = (door) => {
    // eslint-disable-next-line no-console
    console.log("The door was clicked", door);
  };

  const init = () => {
    // eslint-disable-next-line no-console
    console.log("initiated game");

    ui.init(doorClicked);
  };

  return {
    init,
  };
};

export default game;
