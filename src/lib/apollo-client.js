import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.DB_STATAMIC_URL + "/graphql",
    cache: new InMemoryCache(),
});

export default client;