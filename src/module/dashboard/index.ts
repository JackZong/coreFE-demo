import { Module } from "core-fe";
import DashboardPage from "./UI";
import { module } from "./page";

export const Dashboard = module.attachLifecycle(DashboardPage);
