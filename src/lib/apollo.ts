import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl5bm3g0q0ark01um88eng9oy/master",
    cache: new InMemoryCache(),
});
