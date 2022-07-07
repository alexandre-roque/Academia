import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4q5ue0v30hy01xsfnghazto/master",
    cache: new InMemoryCache(),
});
