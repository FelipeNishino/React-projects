import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://sound-panther-20.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
            "DtHOw3cjBnu9NWWtb6sNWdHX4NwP3A0uHlCdV7c124pSBDzOr35qAzK52nj2G53f",
    },
    cache: new InMemoryCache(),
});

export default client;
