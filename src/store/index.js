import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#FFF6F6",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
