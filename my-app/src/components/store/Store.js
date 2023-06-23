import { configureStore } from "@reduxjs/toolkit";
import AddService from "../Add-serv";

export let ourStore = configureStore({
    reducer : {AddService}
})