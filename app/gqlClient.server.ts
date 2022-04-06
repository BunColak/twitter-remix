import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const gqlClient = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": process.env.ADMIN_KEY!
    },
    ssrMode: true,
});

export default gqlClient