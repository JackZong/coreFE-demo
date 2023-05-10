import MainComponent from "./UI";
import { pageModule } from "./page";

export const Main = pageModule.attachLifecycle(MainComponent);
