import axios from "axios";

export const Api = axios.create({
    baseURL: "https://apipizzaria.vitorsantana4.repl.co/"
});