import { Spinner } from "./spin.js";

var opts = {
  lines: 20,
  length: 0,
  width: 30,
  radius: 100,
  scale: 0.95,
  corners: 1,
  speed: 0.5,
  rotate: 0,
  animation: "spinner-line-shrink",
  direction: 1,
  color: "#ff6b08",
  fadeColor: "transparent",
  top: "50%",
  left: "50%",
  shadow: "0 0 1px transparent",
  zIndex: 2000000000,
  className: "spinner",
  position: "absolute",
};

export const target = document.querySelector(".spinner");
export const spinner = new Spinner(opts);
