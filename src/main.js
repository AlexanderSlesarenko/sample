import { directComp } from "./components";

const lazyComp = import("./lazyProxy");

directComp();
lazyComp();
