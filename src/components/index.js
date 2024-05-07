// if export this way you get incorrect bundle output:
export const lazyComp = () => {
  console.log("check lazyComp");
};
export const directComp = () => {
  console.log("check directComp");
};


// if you export this way you get proper bundle output:
// export { default as directComp } from "./directComp";
// export { default as lazyComp } from "./lazyComp";
