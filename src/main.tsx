import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.tsx";
import App from ".";
import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
